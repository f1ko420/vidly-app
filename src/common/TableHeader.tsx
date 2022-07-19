import React from "react";

const TableHeader = () => {
  const columns = ["Title", "Genre", "Rate", "Stock", "", ""];
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <td id={col}>{col}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
