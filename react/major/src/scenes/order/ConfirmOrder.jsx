import React from "react";
import ProductTable from "../../components/order/ProductTable";
import OrderSummary from "../../components/order/OrderSummary";
import ShippingDetails from "../../components/order/ShippingDetails";

function ConfirmOrder() {
  const products = [
    {
      name: "p1",
      price: 100,
      quantity: 1,
      image:
        "https://www.shutterstock.com/image-vector/url-shortener-use-scissors-address-260nw-2210269047.jpg",
    },
    {
      name: "p2",
      price: 100,
      quantity: 2,
      image:
        "https://www.shutterstock.com/image-vector/url-shortener-use-scissors-address-260nw-2210269047.jpg",
    },
    {
      name: "p3",
      price: 100,
      quantity: 3,
      image:
        "https://www.shutterstock.com/image-vector/url-shortener-use-scissors-address-260nw-2210269047.jpg",
    },
  ];
  const data = {
    totalPrice: 100,
    tax: 50,
    shippingPrice: 50,
    totalAmount: 200,
  };
  const shippingDetails = {
    name: "regex",
    address: "regex software, jaipur",
    pincode: 1100089,
    city: "jaipur",
    state: "jaipur",
    mobile: "965432111",
  };
  return (
    <div className="cart">
      <div>
        <h1>Order Details</h1>
        <div className="ShippingDetails">
          <h2>shipping Summary</h2>
          <ShippingDetails shippingDetails={shippingDetails} />
        </div>
        <div className="products">
          <ProductTable products={products} />
        </div>
        <div className="summary">
          <h2>order Summary</h2>
          <div>
            <OrderSummary data={data} />
          </div>
        </div>
        <div>
          <a href="/">
            <button>Confirm order</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
