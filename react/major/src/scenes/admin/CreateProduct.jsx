import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ListingTables from '../../components/tables/ListingTables';
function CreateProduct() {
    const [name, setName] = useState();
    const [price, setPrice] =useState();
    const [image, setImage] = useState();
    const [rating, setRating] = useState();
    return (
      <div className="Products">
        <div>
          <h1>Product Details</h1>
         <h3>Please enter your Product Details</h3>
          <form>
            <input
              placeholder="enter name"
              value={name}
              className="formInput"
              name="name"
              minlength="3"
              onChange={(e) => setName(e.target.value)}
              type="string"
              required
            />
            <input
              placeholder="enter Price"
              value={price}
              className="formInput"
              name="price"
              minlength="3"
              onChange={(e) => setPrice(e.target.value)}
              type="string"
              required
            />
            <input
              placeholder="enter your Rating"
              value={rating}
              className="formInput"
              name="Image"
              minlength="3"
              onChange={(e) => setRating(e.target.value)}
              type="number"
              required
            />
            <input
              placeholder="enter Image"
              value={image}
              className="formInput"
              name="image"
              minlength="3"
              type="password"
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <a href='/CreateProducts'><button type="create Products">confirm product details</button></a>
          </form>
        </div>
      </div>
  )
}
export default CreateProduct
