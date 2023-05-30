import React, { useEffect } from "react";
import ProductCard from "../products/Products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { ColorRing } from "react-loader-spinner";
import toast from 'react-hot-toast';


function Home() {
  const dispatch = useDispatch();
  const {
    loading = true,
    error,
    message,
    products = [],
  } = useSelector((state) => state.productStore);
  useEffect(() => {
    dispatch(getProducts({limit:3}));
  }, [dispatch]);
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({
        type: 'clearError'
      });
    }
  },[error,message, dispatch]);
  console.log(products);
  return (
    <div className="HomePage">
      <div className="welcomePage">
        <h1>Welcome to the one stop for everything</h1>
        <h2>visit our products accross the range</h2>
      </div>
      <a href="#products" className="bounce">
        scroll down
      </a>
      <div className="secondHalf">
        <h1 className="heading" id="products">
          Best Selling Products
        </h1>
        <div className="productConainer">
          {loading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
            />
          ) : (
            products.map((product) => {
              return (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.pic}
                  rating={product.rating}
                  key={product._id}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

