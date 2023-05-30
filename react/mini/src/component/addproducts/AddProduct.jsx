import React from "react";
import "./addProduct.css";
import { useState } from "react";

function AddProduct(props) {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const addElement = (e) =>{
        e.preventDefault();
        console.log("check",name, price);
        if(!name || !price){
            setName('');
        setPrice(undefined);
            return;
        }
        props.AddElement({ name, price });
        setName('');
        setPrice('');
    }
  return (
    <div>
      <form className="addProduct" onSubmit={addElement}>
        <div className="input">
          <h2 className="inputHead">ProductName: </h2>
          <input
            placeholder="enter product name"
            value={name}
            className="formInput"
            name='name'
            minlength="3"
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <h2 className="inputHead">Price: </h2>
          <input
            placeholder="enter product price"
            value={price}
            className="formInput"
            name ='price'
            type="number"
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="formButton" onclick="submitForm()">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
