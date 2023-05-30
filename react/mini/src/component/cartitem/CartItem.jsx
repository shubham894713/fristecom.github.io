import React from 'react';
import './cartItem.css'

function CartItem(props) {
  const incrementQuantity = () =>{
    props.incrementFunction(props.position-1)
  }
  const decrementQuantity = () =>{
    props.decrementFunction(props.position-1)
  }
  const removeProduct = () =>{
    props.removeProduct(props.position-1)
  }
  return (
    <div className="cartItem">
      <h2>{props.position}</h2>
      <h1>{props.name}</h1>
      <h1>₹{props.price}</h1>
      <div className='quantity'>
        <button className='quantityButton' onClick={decrementQuantity}>-</button>
        <h1>{props.quantity}</h1>
        <button className='quantityButton' onClick={incrementQuantity}>+</button>
      </div>
      <h1>₹{props.quantity * props.price}</h1>
      <button className='removeButton' onClick={removeProduct}>Remove</button>
    </div>
  );
}

export default CartItem
