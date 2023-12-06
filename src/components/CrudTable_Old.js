import {useEffect, useState} from "react";
import {jwtClient} from "../auth-api/JWTClient.js";

// a row in crud table
function DataRow({
    rowData,
    headers,
    onDataRowClickedHandle,
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
    initMessage,
    defaultMessage
}) {
    const [message, setMessage] = useState(true);

    useEffect(() => {
        setMessage(initMessage)
        const timeout = setTimeout(() => {
            setMessage(defaultMessage);
        }, 2000); // 10000 milliseconds = 10 seconds

        return () => clearTimeout(timeout);
    }, [initMessage]);

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
    alertMessage,
    defaultMessage,
    onActionButtonClickedHandle,
    onExecuteButtonClickedHandle,
}) {
    return (
        <div className="mt-4 mb-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
            <AlertMessage initMessage={alertMessage} defaultMessage={defaultMessage}/>
        </div>
    );
}


// crud table
export default function CrudTable_Old({
    tableName,
    urlPath,
    headers,
    idName
}) {
    const actions = ["CREATE", "READ", "UPDATE", "DELETE"];

    const [dataRows, setDataRows] = useState([]);

    const [dataInputs, setDataInputs] = useState(emptyDataRow(headers));

    const [action, setAction] = useState("READ");
    const [actionMessage, setActionMessage] = useState(tableName);

    const [allEditable, setAllEditable] = useState(true);
    const [excludeFor, setExcludeFor] = useState([]);


    useEffect( () => {
        if (! jwtClient.stillHasTokenAfter(7200)) {
            // redirect to login page
            // because this is example, we will log in here
            if (jwtClient.login("dr_john", "hashed_password")) {
                console.log("Login successful...");
            }
            else {
                console.log("Login failed...");
            }
            /***** BIG NOTE: In actually situation, redirect to login page. This is just example *****/
        }

        fetchData(urlPath, setDataRows);
    }, [urlPath]);


    return (
        <div>
            <ActionBar actions={actions}
                       selectedAction={action}
                       alertMessage={actionMessage}
                       defaultMessage={tableName}
                       onActionButtonClickedHandle={
                           (e) => onActionButtonClickedHandle(e, headers, setAction, setDataInputs, setAllEditable, setExcludeFor, idName)
                       }
                       onExecuteButtonClickedHandle={(e) =>
                           onExecuteButtonClickedHandle(e, action, dataInputs, urlPath, idName, setDataRows, setActionMessage)}
            />

            <table className="table-auto w-auto border-collapse">
                <thead>
                    <HeaderRow headers={headers} />
                </thead>

                <tbody>
                    <DataInputRow rowData={dataInputs} headers={headers}
                                  allEditable={allEditable} excludeFor={excludeFor}
                                  onInputChangedHandle={(e, key) => onInputChangedHandle(e, key, dataInputs, setDataInputs)}
                    />

                    <DataGrid dataRows={dataRows} headers={headers}
                              onDataRowClickedHandle={(e) => onDataRowClickedHandle(e, dataRows, setDataInputs, dataInputs)}
                    />
                </tbody>
            </table>
        </div>

    )
}



/****** HELPERS ******/
// on Execute button clicked handle
function onExecuteButtonClickedHandle(e, action, dataInputs, path, idName, dataRowsSetter, actionMessageSetter) {
    console.log("OnExecuteButtonClickedHandle: " + action);
    console.log(dataInputs);

    let url = path;
    switch (action) {
        case "CREATE":
            jwtClient
                .fetch(path + buildQueryStringFrom(dataInputs), {method: "POST"})
                .then(response => response.status === 200)
                .then(isSuccess => {
                    if (isSuccess) {
                        actionMessageSetter("Create successful...");
                        fetchData(url, dataRowsSetter)
                    }
                    else {
                        actionMessageSetter("Create failed...");
                    }
                })
            break;
        case "READ":
            jwtClient
                .fetch(path + buildQueryStringFrom(dataInputs), {method: "GET"})
                .then(response => response.json())
                .then(data => dataRowsSetter(data));
            break;
        case "UPDATE":
            jwtClient
                .fetch(path + "/" + dataInputs[idName] + buildQueryStringFrom(dataInputs, [idName]), {method: "PUT"})
                .then(response => response.status === 200)
                .then(isSuccess => {
                    if (isSuccess) {
                        actionMessageSetter("Update successful...");
                        fetchData(url, dataRowsSetter)
                    }
                    else {
                        actionMessageSetter("Update failed...");
                    }
                })
            break;
        case "DELETE":
            jwtClient
                .fetch(path + dataInputs[idName] + buildQueryStringFrom(dataInputs, [idName]), {method: "DELETE"})
                .then(response => response.status === 200)
                .then(isSuccess => {
                    if (isSuccess) {
                        actionMessageSetter("Delete successful...");
                        fetchData(url, dataRowsSetter)
                    }
                    else {
                        actionMessageSetter("Delete failed...");
                    }
                })
            break;
    }
}


// on data input changed handle
function onInputChangedHandle(e, key, dataInputs, dataInputsSetter) {
    const value = e.target.value;

    console.log("OnInputChangedHandle: " + key + " - " + value);

    const newDataInputs = {...dataInputs};

    newDataInputs[key] = value;
    dataInputsSetter(newDataInputs);
}

// on action changed handle
function onActionButtonClickedHandle(e, headers, actionSetter, dataInputsSetter, allEditableSetter, excludeForSetter, idName) {
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
function onDataRowClickedHandle(e, dataRows, setter, dataInputs) {

    let rowIndex = e.target.parentNode.rowIndex - 2;

    // get data from dataRows
    let data = dataRows[rowIndex];
    console.log("From full data: " + dataRows);
    console.log("Using index: " + rowIndex);
    console.log("OnTableRowClicked Get DATA: " + data);
    setter(data);
    console.log(dataInputs);
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
function fetchData(urlPath, callback) {
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
        /***** BIG NOTE: In actually situation, redirect to login page. This is just example *****/
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





























