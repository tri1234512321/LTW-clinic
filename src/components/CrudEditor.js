// SelectMenu.jsx

import React, {useEffect, useState} from 'react';
import CrudTable from "./CrudTable";
import {jwtClient} from "../auth-api/JWTClient";

function ControlBar ({
    tables,
    selectedTable,
    tableInfo,
    handleTableChange,

}){
    return (
        <div className="flex justify-between items-center bg-gray-200">
            <div className="flex items-center">
                <span className="text-clip bg-gray-300 p-2">CRUD Editor  </span>
                <span className="bg-gray-200 p-2">    </span>
                <label className="mr-2">Select Table:</label>
                <select
                    value={selectedTable}
                    onChange={handleTableChange}
                    className="py-2 px-4 border rounded-md border-gray-300"
                >
                    {tables.map((table) => (
                        <option key={table} value={table}>
                            {table}
                        </option>
                    ))}
                </select>
            </div>

            <div className="text-gray-600">
                <span className="mr-2">Table Info:</span>
                <span>{tableInfo}</span>
            </div>
        </div>
    );
}

function GoToDataPiece({
    dataKey,
    dataValue
}) {
    return (
        <div className="ms-2">
            <span className="bg-blue-300 text-clip p-2">{dataKey}: </span>
            <span className="bg-gray-300 text-clip p-2">{dataValue} </span>
        </div>
    );
}

function GoToBar({
    goToBarTarget,
    referenceData,
    referenceHeaders,
    handleGoToButtonClicked
 }) {
    return (
        <div className="flex items-center p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={e => handleGoToButtonClicked(e)}
            >
                Go To
            </button>
            <div className={`ms-3 p-2 text-sm`}>
                <div className="bg-blue-500 text-white p-2 shadow-md">
                    {(goToBarTarget ?? "You are here!")}
                </div>
            </div>

            {referenceHeaders.map((header, index) => (
                <GoToDataPiece  key={index}
                                dataKey={header}
                                dataValue={referenceData[header]}
                />
            ))}
        </div>
    );
}


export default function CrudEditor ({
    tables
}) {
    const tableNames = tables.map((table) => table.name);

    const [selectedTable, setSelectedTable] = useState(tables[0]);
    const [initQueryString, setInitQueryString] = useState("");
    const [tableInfoMessage, setTableInfoMessage] = useState(extractTableInfo(tables[0]));

    const [referenceInfo, setReferenceInfo] = useState(null);
    const [referenceData, setReferenceData] = useState(null);
    const [referenceHeaders, setReferenceHeaders] = useState(null);
    const [goToBarTarget, setGoToBarTarget] = useState(null);

    useEffect( () => {
        if (
            referenceInfo !== undefined
            && referenceInfo !== null
        ) {
            doReferenceChangedEffect(tables, selectedTable, referenceInfo,
                setReferenceData, setReferenceHeaders, setGoToBarTarget);
        }
    }, [referenceInfo]);

    useEffect( () => {
        setReferenceInfo(null);
        setReferenceData(null);
        setReferenceHeaders(null);
        setGoToBarTarget(null);
    }, [selectedTable]);

    return (
        <div>
            <ControlBar
                tables={tableNames}
                selectedTable={selectedTable.name}
                tableInfo={tableInfoMessage}
                handleTableChange={e => handleTableChange(e, tables, setSelectedTable, setTableInfoMessage, setInitQueryString)}
            />
            <GoToBar goToBarTarget={goToBarTarget}
                    referenceData={referenceData ?? {}}
                    referenceHeaders={referenceHeaders ?? []}
                    handleGoToButtonClicked={e => handleGoToButtonClicked(
                        e, referenceInfo, tables, selectedTable, setSelectedTable, setInitQueryString)}
            />
            <CrudTable
                tableName={selectedTable.name + " Table"}
                urlPath={selectedTable.urlPath}
                headers={selectedTable.headers}
                idName={selectedTable.idName}
                onCellDoubleClickedHandle={setReferenceInfo}
                initQueryString={initQueryString}
            />
        </div>
    )
}

function handleGoToButtonClicked(e, referenceInfo, tables, selectedTable, setSelectedTable, setInitQueryString) {
    let relations = selectedTable.relations;
    let relation;
    if (relations !== undefined && relations !== null) {
        relation = relations.find(relation => relation.header === referenceInfo.header);
    }

    if (relation === undefined || relation === null) {
        let queryString = "?" + referenceInfo.header + "=" + referenceInfo.value;
        setInitQueryString(queryString);
    }
    else {
        let relTable = tables.find(table => table.name === relation.tableName);
        let queryString = "?" + relTable.idName + "=" + referenceInfo.value;
        setSelectedTable(relTable);
        setInitQueryString(queryString);
    }
}

function doReferenceChangedEffect(tables, selectedTable, referenceInfo, setReferenceData, setReferenceHeaders, setGoToBarTarget) {
    let relations = selectedTable.relations;
    if (relations === undefined || relations === null) {
        setGoToBarTarget(referenceInfo.header + "=" + referenceInfo.value);
        setReferenceData(null);
        setReferenceHeaders(null);
        return;
    }
    let relation = selectedTable.relations.find(
        relation => relation.header === referenceInfo.header);

    if (relation === undefined || relation === null) {
        setGoToBarTarget(referenceInfo.header + "=" + referenceInfo.value);
        setReferenceData(null);
        setReferenceHeaders(null);
        return;
    }

    let relTable = tables.find(table => table.name === relation.tableName);



    let urlPath = relTable.urlPath + "?" + relTable["idName"] + "=" + referenceInfo.value;



    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            setGoToBarTarget(relTable.name + " Table")
            setReferenceData(data[0]);
            setReferenceHeaders(relTable.headers);
        });
}

function extractTableInfo(table) {
    const {name, idName, urlPath} = table;
    return `${name} | idColumn: ${idName} | urlPath: ${urlPath}`;
}

function handleTableChange(e, tables, setSelectedTable, setTableInfo, setInitQueryString) {
    const table = tables.find(
        (table) => table.name === e.target.value
    );
    console.log("handleTableChange NEW TABLE: " + table.name);
    setInitQueryString("");
    setSelectedTable(table);
    setTableInfo(extractTableInfo(table));
}




