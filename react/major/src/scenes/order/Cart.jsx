import React from "react";
import ProductTable from "../../components/order/ProductTable";
import OrderSummary from "../../components/order/OrderSummary";

function Cart() {
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
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
        {products.length === 0 ? (
          <h2> No products in your cart please add to move forward</h2>
        ) : (
          <>
            <div className="products">
                <ProductTable products = {products} />
            </div>
            <div className="summary">
              <h2>order Summary</h2>
              <div>
                <OrderSummary data={data} />
              </div>
            </div>
            <div>
              <a href="/shippingDetails"><button>Shipping Details</button></a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
