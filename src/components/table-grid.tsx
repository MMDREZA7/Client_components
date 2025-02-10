import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";

interface TableGridProps {
  title: string;
  rowData: object[];
  columnDef: object[];
}

const TableGrid: React.FC<TableGridProps> = ({ title, rowData, columnDef }) => {
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete" },
    { field: "sport" },
    { field: "age" },
  ]);

  useEffect(() => {
    if (columnDef) {
      setColumnDefs(columnDef);
      return;
    }
  }, []);

  return (
    <div>
      {title}
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default TableGrid;
