// src/components/admin/DataTable.jsx
import React from "react";

const DataTable = ({
  headers,
  data,
  renderCell,
  loading = false,
  emptyMessage = "No data found",
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full border mt-6 bg-white shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((header) => (
                  <th key={header.key} className="p-3 border text-left">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="p-4 text-center text-gray-500"
                  >
                    {loading ? "Loading..." : emptyMessage}
                  </td>
                </tr>
              ) : (
                data.map((rowData, rowIndex) => (
                  <tr
                    key={rowData.key || rowIndex}
                    className="border-t hover:bg-gray-50"
                  >
                    {headers.map((header) => (
                      <td key={header.key} className="p-3 border">
                        {renderCell(header, rowData, rowIndex)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden mt-4 space-y-4">
        {data.length === 0 ? (
          <div className="text-center text-gray-500">
            {loading ? "Loading..." : emptyMessage}
          </div>
        ) : (
          data.map((rowData, rowIndex) => (
            <div
              key={rowData.key || rowIndex}
              className="bg-white shadow-sm rounded-lg border p-4"
            >
              {headers.map((header) => (
                <div key={header.key} className="flex justify-between py-1">
                  <span className="font-medium text-gray-600">
                    {header.label}:
                  </span>
                  <span className="text-gray-800">
                    {renderCell(header, rowData, rowIndex)}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DataTable;
