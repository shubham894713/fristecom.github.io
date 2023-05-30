import React from 'react'

function CartItem(props) {
  return (
    <div className="cartItem">
      <h2>{props.position}</h2>
      <h1>{props.name}</h1>
      <h1>₹{props.price}</h1>
      <div className='quantity'>
        <button className='quantityButton'>-</button>
        <h1>{props.quantity}</h1>
        <button className='quantityButton'>+</button>
      </div>
      <h1>₹{props.quantity * props.price}</h1>
    </div>
  )
}

export default CartItem
