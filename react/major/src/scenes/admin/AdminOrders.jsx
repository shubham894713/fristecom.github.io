import React from 'react'
import { useNavigate } from "react-router-dom";
import ListingTable from '../../components/tables/ListingTables';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, IconButton} from '@mui/material';

function AdminOrders() {
    const navigate = useNavigate();
    const rows= [
      {
        orderId:'ugfbdsgsdxcvbnmgf',
        number:1,
        orderOn:'01-03-2023',
        totalAmount: 100,
        orderStatus:'pending'
      },
      {
        orderId:'ugfbdsgsdxcvbnmgf',
        number:2,
        orderOn:'01-02-2023',
        totalAmount: 200,
        orderStatus:'canceled'
      },
      {
        orderId:'ugfbdsgsdxcvbnmgf',
        number:3,
        orderOn:'02-03-2023',
        totalAmount: 50,
        orderStatus:'pending'
      },
      {
        orderId:'ugfbdsgsdxcvbnmgf',
        number:4,
        orderOn:'01-01-2023',
        totalAmount: 10,
        orderStatus:'pending'
      },
      {
        orderId:'ugfbdsgsdxcvbnmgf',
        number:5,
        orderOn:'01-03-2023',
        totalAmount: 100,
        orderStatus:'delivered'
      }
    ];
    const columns  =[
      {
        accessorKey: "number",
        header: "S no.",
        size:50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: "orderOn",
        header: "Ordered On",
        size:100
      },
      {
        accessorKey:'totalAmount',
        header: 'Order Total(₹)',
        size:50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey:'orderStatus',
        header:'Status',
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey:'orderId',
        header:'View Details',
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        Cell:({ cell }) => {
          return <Box>
          <IconButton onClick={() => navigate(`/orderDetails/${cell.getValue()}`)}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Box>;
        },
      }
    ];
    return (
      <div className="cart">
        <div>
        <h1>Your Orders</h1>
        <div className="ShippingDetails">
            <ListingTable rows={rows} columns={columns}/>
          </div>
        </div>
      </div>
    )
  }

export default AdminOrders
