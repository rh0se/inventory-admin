import React, { createContext, useContext, useState } from 'react'

const TableDataContext = createContext();

export const TableProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);

    const addEntry = (entry) => {
        setTableData((prev) =>
            [...prev, { sn: prev.length + 1, ...entry }]
        );
    }
    return (
        <TableDataContext.Provider value={{ tableData, addEntry }}>
            {children}
        </TableDataContext.Provider>
    );
}

export const useTableData = () => {
    return useContext(TableDataContext);
}
