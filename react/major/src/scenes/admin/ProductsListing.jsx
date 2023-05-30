import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListingTable from '../../components/tables/ListingTables';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { deleteProduct } from '../../redux/actions/productActions';

function ProductsListing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loading = true,
    error,
    message,
    products = [],
  } = useSelector((state) => state.productStore);
  useEffect(()=>{
    dispatch(getProducts({}));
  },[dispatch]);
  const rows = products.map((el, i)=>{
    return {
      number: i+1,
      name:el.name,
      stock: el.stock,
      price: el.price,
      pic: el.pic,
      productId: el._id,
    }
  })
  const deletePro = (productId) =>{
    dispatch(deleteProduct({ productId }));
    navigate('/adminProducts')
  }
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
      header: "Product Name",
      size:100
    },
    {
      accessorKey:'stock',
      header: 'Quantity',
      size:50,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
    },
    {
      accessorKey:'price',
      header: 'Price',
      size:50,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
    },
    {
      accessorKey:'pic',
      header:'',
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      Cell:({ cell }) => {
          const styles = { width: 40, borderRadius: "50%" };
          return <img src={cell.getValue()} style={styles} alt='unavailable'/>;
      },
    },
    {
      accessorKey:'productId',
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
        <IconButton onClick={()=>{deletePro(cell.getValue())}} component="div">
          <DeleteOutlineIcon sx={{ padding:0, margin:0}}/>
        </IconButton>
        <IconButton onClick={() => navigate(`/admin/users`)} component="div">
          <EditIcon sx={{ padding:0, margin:0}}/>
        </IconButton>
      </Box>;
      },
    }
  ];
  return (
    <div className="cart">
      <div>
      <h1>Products</h1>
      <div className="ShippingDetails">
          {
            loading ? 
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
          />:
          <ListingTable rows={rows} columns={columns}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsListing
