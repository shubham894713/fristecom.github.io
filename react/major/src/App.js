import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./components/styles/navbar.scss";
import "./components/styles/app.scss";
import "./components/styles/footer.scss";
import "./components/styles/home.scss";
import "./components/styles/productCard.scss";
import "./components/styles/products.scss";
import './components/styles/notfound.scss';
import './components/styles/contact.scss';
import Home from "./scenes/home/Home";
import './components/styles/cart.scss';
import Products from "./scenes/products/Products";
import NotFound from "./scenes/notfound/NotFound";
import Contact from "./scenes/contact/Contact";
import Cart from "./scenes/order/Cart";
import Login from "./scenes/user/Login";
import './components/styles/login.scss';
import Register from "./scenes/user/Register";
import ShippingDetails from "./scenes/order/ShippingDetails";
import ConfirmOrder from "./scenes/order/ConfirmOrder";
import Profile from "./scenes/user/Profile";
import Orders from "./scenes/order/Orders";
import OrderDetails from "./scenes/order/OrderDetails";
import ProductsListing from "./scenes/admin/ProductsListing";
import AdminOrders from "./scenes/admin/AdminOrders";
import Users from "./scenes/admin/Users";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser }  from "./redux/actions/useraction";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { error, message, login, isAdmin } = useSelector((state) => state.user);
  useEffect(()=>{
      dispatch(checkUser());
    },[dispatch]);
    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({
          type: 'clearError'
        });
      } 
      if(message) {
        toast.success(message);
      dispatch({
        type: 'clearMessage'
      })
      }
    },[error,message, dispatch]);
  return (
    <Router>
      <Navbar login={login} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/cart" element={<Cart />} exact />
        <Route path="/shippingDetails" element={<ShippingDetails />} exact />
        <Route path="/confirmOrder" element={<ConfirmOrder />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/orderDetails/:id" element={<OrderDetails />} exact />
        <Route path="/me" element={<Profile />} exact />
        <Route path="/adminProducts" element={<ProductsListing />} exact />
        <Route path="/adminOrders" element={<AdminOrders />} exact />
        <Route path="/adminUsers" element={<Users />} exact />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Toaster 
      toastOptions={{
        duration: 1000,
        style:{
          border: '1px solid black',
        },
        success: {
          style: {
            background: 'green',
            color: 'white'
          },
        },
        error: {
          style: {
            background: 'red',
            color: 'white'
          },
        },
      }}
      />
      <Footer />
    </Router>
  );
}

export default App;