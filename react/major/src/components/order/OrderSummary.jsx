import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

function OrderSummary(props) {
  const getName = (key) => {
    const camelCase = key.replace(/([a-z])([A-Z])/g, "$1 $2");
    return camelCase[0].toUpperCase() + camelCase.slice(1);
  };
  const tableData = [];
  const enteries = Object.entries(props.data);
  enteries.forEach((entry) => {
    tableData.push({ name: getName(entry[0]), value: `₹${entry[1]}` });
  });
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "",
        size: 250,
      },
      {
        accessorKey: "value",
        header: "Prices",
        size: 50,
      },
    ],
    []
  );
  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
      />
    </div>
  );
}

export default OrderSummary;
