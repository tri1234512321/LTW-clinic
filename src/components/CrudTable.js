import {useEffect, useState} from "react";
import {jwtClient, JWTClient} from "../auth-api/JWTClient.js";
import {useNavigate} from "react-router-dom";

// a row in crud table
function DataRow({
    rowData,
    headers,
    onDataRowClickedHandle
}) {
    return (
        <tr onClick={(e) => onDataRowClickedHandle(e)} className="cursor-pointer hover:bg-gray-100">
            {headers.map((key, index) => (
                <td key={index} className="border px-4 py-2">
                    {rowData[key]}
                </td>
            ))}
        </tr>
    )
}

// button function for action (add, delete,...)
function DataGrid({
    dataRows,
    headers,
    onDataRowClickedHandle
}) {
    if (dataRows) {
        return (
            dataRows.map((rowData, index) => (
                <DataRow key={index} rowData={rowData} headers={headers} onDataRowClickedHandle={onDataRowClickedHandle} />
            ))
        )
    }
}

function HeaderRow({
    headers
}) {
    return (
        <tr className="bg-gray-200">
            {headers.map((header, index) => (
                <th key={index} className="border px-4 py-2">
                    {header}
                </th>
            ))}
        </tr>
    )
}


// input field (used to edit data for each header)
function DataInput({
    name,
    value,
    editable,
    onInputChangedHandle
}) {
    return (
        <input type="text"
               value={value ?? ""}
               disabled={! editable}
               contentEditable={true}
               onChange={(e) => onInputChangedHandle(e, name)}
               className="w-full p-2 border rounded mb-2"
        />
    )
}

// input row for each header
function DataInputRow({
    rowData,
    headers,
    allEditable,
    excludeFor,
    onInputChangedHandle
}) {
    return (
        <tr>
            {headers.map((key, index) => (
                <td key={index} className="border px-4 py-2">
                    <DataInput name={key} value={rowData[key]}
                               editable={(! allEditable && excludeFor.includes(key))
                                   || (allEditable && ! excludeFor.includes(key))}
                                 onInputChangedHandle={onInputChangedHandle}
                    />
                </td>
            ))}
        </tr>
    )
}


function CrudRadioButton({
    action,
    isChecked,
    onActionButtonClickedHandle
}) {
    return (
        <div className="flex items-center ps-3">
            <input
                id={action}
                checked={isChecked}
                onClick={(e) => onActionButtonClickedHandle(e)}
                onChange={() => {}}
                type="radio"
                value={action}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
                htmlFor="horizontal-list-radio-license"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {action.toUpperCase()}
            </label>
        </div>
    )
}

function AlertMessage({
    message
}) {
    return (
        <div className={`ms-3 p-2 text-sm`}>
            <div className="bg-blue-500 text-white p-2 shadow-md">
                {message}
            </div>
        </div>
    );
}

// actions radio button (CREATE, UPDATE, DELETE)
function ActionBar({
    selectedAction,
    actions,
    actionMessage,
    onActionButtonClickedHandle,
    onExecuteButtonClickedHandle,
}) {
    return (
        <div className="mb-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <button
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={(e) => onExecuteButtonClickedHandle(e)}
            >
                Execute
            </button>

            {actions.map((action, index) => (
                <CrudRadioButton action={action} key={index}
                                 isChecked={action === selectedAction}
                                 onActionButtonClickedHandle={(e) => onActionButtonClickedHandle(e)}
                />
            ))}
            <AlertMessage message={actionMessage}/>
        </div>
    );
}


// crud table
export default function CrudTable({
    tableName,
    urlPath,
    headers,
    idName,
    initQueryString,
    onCellDoubleClickedHandle
}) {

    const actions = ["CREATE", "READ", "UPDATE", "DELETE"];

    const [dataRows, setDataRows] = useState([]);

    const [dataInputs, setDataInputs] = useState(emptyDataRow(headers));

    const [action, setAction] = useState("READ");
    const [actionMessage, setActionMessage] = useState(tableName);

    const [allEditable, setAllEditable] = useState(true);
    const [excludeFor, setExcludeFor] = useState([]);

    useEffect(() => {
        fetchData(urlPath + initQueryString, setDataRows);
    }, []);

    useEffect(() => {
        setDataRows([]);
        setDataInputs(emptyDataRow(headers));
        setAction("READ");
        setAllEditable(true);
        setExcludeFor([]);
        fetchData(urlPath + initQueryString, setDataRows);
    }, [tableName, initQueryString]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActionMessage(tableName);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [actionMessage]);


    return (
        <div>
            <ActionBar actions={actions}
                       selectedAction={action}
                       actionMessage={actionMessage}
                       onActionButtonClickedHandle={
                           (e) => onActionButtonClickedHandle(
                               e, headers, setAction, setDataInputs, setAllEditable, setExcludeFor, idName, urlPath, setDataRows)
                       }
                       onExecuteButtonClickedHandle={(e) => onExecuteButtonClickedHandle(
                           e, action, dataInputs, urlPath, idName, setDataRows, setActionMessage)}
            />

            <div className="overflow-scroll h-1/3 max-h-[60vh]">
                <table className="table-auto w-auto border-collapse">
                    <thead>
                    <HeaderRow headers={headers} />
                    </thead>

                    <tbody>
                    <DataInputRow rowData={dataInputs} headers={headers}
                                  allEditable={allEditable} excludeFor={excludeFor}
                                  onInputChangedHandle={(e, key) => onInputChangedHandle(
                                      e, key, dataInputs, setDataInputs, action, urlPath, setDataRows)}
                    />

                    <DataGrid dataRows={dataRows} headers={headers}
                              onDataRowClickedHandle={(e) => onDataRowClickedHandle(
                                  e, dataRows, setDataInputs, dataInputs, onCellDoubleClickedHandle, headers)}
                    />
                    </tbody>
                </table>
            </div>
        </div>

    )
}



/****** HELPERS ******/
// on Execute button clicked handle
function onExecuteButtonClickedHandle(e, action, dataInputs, path, idName, dataRowsSetter, actionMessageSetter) {
    console.log("OnExecuteButtonClickedHandle: " + action);
    console.log(dataInputs);

    let queryPath = "";
    switch (action) {
        case "CREATE":
            queryPath = path + buildQueryStringFrom(dataInputs);
            executeUpdateQuery(
                "POST", queryPath, path,
                true, "Create successful...",
                "Create failed...", true,
                dataRowsSetter, actionMessageSetter)
            break;
        case "READ":
            fetchData(path + buildQueryStringFrom(dataInputs), dataRowsSetter);
            break;
        case "UPDATE":
            queryPath = path + "/" + dataInputs[idName] + buildQueryStringFrom(dataInputs);
            executeUpdateQuery(
                "PUT", queryPath, path,
                true, "Update successful...",
                "Update failed...", true,
                dataRowsSetter, actionMessageSetter)
            break;
        case "DELETE":
            queryPath = path + "/" + dataInputs[idName] + buildQueryStringFrom(dataInputs);
            executeUpdateQuery(
                "DELETE", queryPath, path,
                true, "Delete successful...",
                "Delete failed...", true,
                dataRowsSetter, actionMessageSetter)
            break;
    }
}


function executeUpdateQuery(method, queryPath, reFetchPath, fetchDataWhenSuccess, successMessage, failedMessage,
                            useServerMessage, dataRowsSetter, actionMessageSetter) {
    let isSuccess = false;
    jwtClient
        .fetch(queryPath, {method: method})
        .then(response => {
            if (response.status === 200) {
                isSuccess = true;
            }
            return response.json();
        })
        .then(data => {
            if (isSuccess) {
                actionMessageSetter(useServerMessage ? data.message ?? successMessage : successMessage);
                fetchData(reFetchPath, dataRowsSetter)
            }
            else {
                actionMessageSetter(useServerMessage ? data.message ?? failedMessage : failedMessage);
            }
        })
}


// on data input changed handle
function onInputChangedHandle(e, key, dataInputs, dataInputsSetter, action, urlPath, dataRowsSetter) {
    const value = e.target.value;

    console.log("OnInputChangedHandle: " + key + " - " + value);

    const newDataInputs = {...dataInputs};

    newDataInputs[key] = value;
    dataInputsSetter(newDataInputs);

    if (action === "READ") {
        fetchData(urlPath + buildQueryStringFrom(newDataInputs), dataRowsSetter);
    }
}

// on action changed handle
function onActionButtonClickedHandle(e, headers, actionSetter, dataInputsSetter,
                                     allEditableSetter, excludeForSetter, idName, urlPath, dataRowsSetter) {
    const action = e.target.value;
    actionSetter(action);

    switch (action) {
        case "CREATE":
            allEditableSetter(true);
            excludeForSetter([]);
            dataInputsSetter(emptyDataRow(headers));
            break;
        case "READ":
            allEditableSetter(true);
            excludeForSetter([]);
            dataInputsSetter(emptyDataRow(headers));
            fetchData(urlPath, dataRowsSetter);
            break;
        case "UPDATE":
            allEditableSetter(true);
            excludeForSetter([idName]);
            break;
        case "DELETE":
            allEditableSetter(false);
            excludeForSetter([]);
            break;
    }
}


// on data row clicked
function onDataRowClickedHandle(e, dataRows, setter, dataInputs, onCellDoubleClickedHandle, headers) {

    let rowIndex = e.target.parentNode.rowIndex - 2;

    if (rowIndex === null || rowIndex === undefined || isNaN(rowIndex)) {
        return;
    }

    console.log("OnTableRowClicked HANDLING | NUMCLICK: " + e.detail);

    let rowData = dataRows[rowIndex];

    if (e.detail === 2) {

        console.log("ON " + e.detail + " CLICK HANDLING");
        // get data from dataRows
        console.log("From full data: " + dataRows);
        console.log("Using index: " + rowIndex);
        console.log("OnTableRowClicked Get DATA: " + rowData);
        setter(rowData);
        console.log(dataInputs);
    }
    else if (e.detail === 1) {

        console.log("ON " + e.detail + " CLICK HANDLING");

        let cell = e.target;

        let colIndex = cell.cellIndex;

        if (colIndex === null || colIndex === undefined) {
            return;
        }

        console.log("OnTableRowClicked Get CELL COL-INDEX: " + colIndex);

        let header = headers[colIndex];
        let value = rowData[header];

        onCellDoubleClickedHandle({
            header: header,
            value: value
        });
    }
}

// return empty data row
function emptyDataRow(headers) {
    let data = {};
    headers.forEach(header => {
        data[header] = undefined;
    });
    return data;
}


// fetch data
/*function fetchData(urlPath, callback) {
    // fetch data from server
    if (!jwtClient.stillHasTokenAfter(7200)) {
        // redirect to login page
        // because this is example, we will log in here
        if (jwtClient.login("dr_john", "hashed_password")) {
            console.log("Login successful...");
        }
        else {
            console.log("Login failed...");
        }
        /!***** BIG NOTE: In actually situation, redirect to login page. This is just example *****!/
    }
    else {
        console.log("Token is still valid... no need to login...");
    }

    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            callback(data)
        });
}*/

function fetchData(urlPath, callback) {
    // fetch data from server
    /*if (!jwtClient.stillHasTokenAfter(7200)) {
        // redirect to login page
        // because this is example, we will log in here
        if (jwtClient.login("dr_john", "hashed_password")) {
            console.log("Login successful...");
        }
        else {
            console.log("Login failed...");
        }
        /!***** BIG NOTE: In actually situation, redirect to login page. This is just example *****!/
    }
    else {
        console.log("Token is still valid... no need to login...");
    }*/

    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            callback(data)
        })
        .catch(err => {
            console.log("Error...");
            console.log(err);
            if (err === JWTClient.REFRESH_TOKEN_FAILED) {
                console.log("You need to login...");
            }
            return {}
        });
}

// build query string
function buildQueryStringFrom(dataInputs, excludes = []) {
    return "?" +
        Object.keys(dataInputs)
            .filter((key) => !excludes.includes(key)
                && dataInputs[key] !== undefined
                && dataInputs[key] !== null
                && dataInputs[key] !== "")
            .map((key) => key + "=" + dataInputs[key])
            .join("&");
}






























