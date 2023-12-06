// SelectMenu.jsx

import React, { useState } from 'react';
import CrudTable from "./CrudTable";
import {jwtClient} from "../auth-api/JWTClient.js"; 

function ControlBar ({
    tables,
    selectedTable,
    tableInfo,
    handleTableChange,

}){
    return (
        <div className="flex justify-between items-center bg-gray-200 p-2">
            <div className="flex items-center">
                <label className="mr-2">Select Table:</label>
                <select
                    value={selectedTable}
                    onChange={handleTableChange}
                    className="py-2 px-4 border rounded-md"
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

function GoToBar({

 }) {
    return (
        <div className="flex items-center p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Go To
            </button>
            <span className="ml-4 bg-clip-text flex items-center">
        in for about a product order
      </span>
        </div>
    );
}


export default function CrudEditor ({
    tables
}) {
    const tableNames = tables.map((table) => table.name);
    const [selectedTable, setSelectedTable] = useState(tables[0]);
    const [tableInfo, setTableInfo] = useState(extractTableInfo(tables[0]));

    return (
        <div>
            <ControlBar
                tables={tableNames}
                selectedTable={selectedTable.name}
                tableInfo={tableInfo}
                handleTableChange={e => handleTableChange(e, tables, setSelectedTable, setTableInfo)}
            />
            <GoToBar/>
            <CrudTable
                tableName={selectedTable.name + " Table"}
                urlPath={selectedTable.urlPath}
                headers={selectedTable.headers}
                idName={selectedTable.idName}
            />
        </div>
    )
}

function extractTableInfo(table) {
    const {name, idName, urlPath} = table;
    return `${name} | idColumn: ${idName} | urlPath: ${urlPath}`;
}

function handleTableChange(e, tables, setSelectedTable, setTableInfo) {
    const table = tables.find(
        (table) => table.name === e.target.value
    );
    console.log("handleTableChange NEW TABLE: " + table.name);
    setSelectedTable(table);
    setTableInfo(extractTableInfo(table));
}

