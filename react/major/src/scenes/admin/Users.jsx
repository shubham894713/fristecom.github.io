import React from 'react'
import { useNavigate } from "react-router-dom";
import ListingTable from '../../components/tables/ListingTables';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton} from '@mui/material';

function Users() {
    const navigate = useNavigate();
    const rows= [
      {
        userId:'ugfbdsgsdxcvbnmgf',
        number:1,
        name:'regex1',
        mobile: '9876543211',
        email:'pending@gmail.com'
      },
      {
        userId:'ugfbdsgsdxcvbnmgf',
        number:2,
        name:'regex1',
        mobile: '9876543211',
        email:'pending@gmail.com'
      },
      {
        userId:'ugfbdsgsdxcvbnmgf',
        number:3,
        name:'regex1',
        mobile: '9876543211',
        email:'pending@gmail.com'
      },
      {
        userId:'ugfbdsgsdxcvbnmgf',
        number:4,
        name:'regex1',
        mobile: '9876543211',
        email:'pending@gmail.com'
      },
      {
        userId:'ugfbdsgsdxcvbnmgf',
        number:5,
        name:'regex1',
        mobile: '9876543211',
        email:'pending@gmail.com'
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
          accessorKey: "name",
          header: "Name",
          size:100
        },
        {
          accessorKey:'mobile',
          header: 'Mobile Number',
          size:50,
          muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
        },
        {
          accessorKey:'email',
          header:'Email',
          muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
        },
        {
          accessorKey:'userId',
          header:'Edit',
          muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
            height: '1rem',
          },
          Cell:({ cell }) => {
            return <Box sx={{ padding:0, height: '1.5rem'}}>
            <IconButton onClick={() => navigate(`/admin/users`)} component="div">
              <DeleteOutlineIcon sx={{ padding:0, margin:0}}/>
            </IconButton>
          </Box>;
          },
        }
      ];
      return (
        <div className="cart">
          <div>
          <h1>Users</h1>
          <div className="ShippingDetails">
              <ListingTable rows={rows} columns={columns}/>
            </div>
          </div>
        </div>
      )
  }
export default Users
