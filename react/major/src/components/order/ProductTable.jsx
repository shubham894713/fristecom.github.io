import React, { useMemo } from "react";
import MaterialTable from "@material-table/core";

function ProductTable(props) {
  const cartProducts = props.products.map((product) => {
    return { ...product, total: product.quantity * product.price };
  });
  const cartColumns = useMemo(
    () => [
      {
        title: "",
        field: "image",
        render: (rowData) => {
          const styles = { width: 40, borderRadius: "50%" };
          return <img src={rowData.image} style={styles} />;
        },
      },
      {
        title: "Product Name",
        field: "name",
      },
      {
        title: "Quantity",
        field: "quantity",
      },
      {
        title: "Price",
        field: "price",
      },
      {
        title: "Total",
        field: "total",
      },
    ],
    []
  );
  return (
    <div>
      <MaterialTable
        columns={cartColumns}
        data={cartProducts}
        title={"Products"}
        options={{ search: false, paging: false }}
      />
    </div>
  );
}

export default ProductTable;
