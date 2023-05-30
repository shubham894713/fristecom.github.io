import CartItem from "./component/cartitem/CartItem";
import { useState } from "react";
import AddProduct from "./component/addproducts/AddProduct";
import Footer from "./component/footer/Footer";

function App() {
  const productsArray = [
    {
      name: "regex1",
      price: 10,
      quantity: 10,
    },
    {
      name: "regex2",
      price: 10,
      quantity: 10,
    },
    {
      name: "regex3",
      price: 10,
      quantity: 10,
    },
    {
      name: "regex4",
      price: 10,
      quantity: 10,
    },
  ];

  const [products, setProducts] = useState(productsArray);
  const getTotal = (products) =>{
    return products.reduce((total,currEle)=>{
      total =total + currEle.quantity*currEle.price;
      return total
    },0);
  }
  const [total, setTotal] = useState(getTotal(products));
  const incrementFunction = (index) =>{
    console.log(index);
    products[index].quantity = products[index].quantity + 1;
    setProducts([...products]);
    setTotal(getTotal(products));
  }
  const decrementFunction = (index) =>{
    console.log(index);
    products[index].quantity = products[index].quantity - 1;
    if(products[index].quantity<0){
      products[index].quantity = 0;
    }
    setProducts([...products]);
    setTotal(getTotal(products));
  }
  const removeProduct = (index) =>{
    console.log(index);
    products.splice(index,1);
    setProducts([...products]);
    setTotal(getTotal(products));
  }

  const AddElement = ({ name, price }) =>{
    products.push({ name, price, quantity:0 });
    setProducts([...products]);
    setTotal(getTotal(products));
  }
  const clearCart = () =>{
    setProducts([]);
    setTotal(0);
  }
  return (
    <div className="App">
      <h1>Cart-{products.length}</h1>
      <AddProduct AddElement={AddElement}/>
      {products.map((product, index) => {
        return (
          <CartItem
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            position = {index+1}
            incrementFunction = {incrementFunction}
            decrementFunction = {decrementFunction}
            removeProduct = {removeProduct}
            key={index}
          />
        );
      })}
      <Footer total = {total} clearCart = {clearCart}/>
    </div>
  );
}

export default App;