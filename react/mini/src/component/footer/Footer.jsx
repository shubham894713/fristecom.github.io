import React from 'react';
import './footer.css'

function Footer(props) {
    const clearCart =() =>{
        props.clearCart();
    }
  return (
    <div className='footer'>
      <button className='footerButton' onClick={clearCart}>Clear Cart</button>
      <h1 className='grandTotal'>Grand total: {props.total}</h1>
    </div>
  )
}

export default Footer
