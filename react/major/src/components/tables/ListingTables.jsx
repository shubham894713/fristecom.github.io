import React from 'react'
import MaterialReactTable from "material-react-table";

function ListingTables(props) {
  return (
    <div className='table'>
    <MaterialReactTable
      columns={props.columns}
      data={props.rows}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
    />
  </div>
  )
}

export default ListingTables
