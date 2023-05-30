import { Button } from '@mui/material'
import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from "react-redux";
import { createNewCart } from "../../redux/actions/cartAction";

function ProductCard(props) {
  const dispatch = useDispatch();
  const addToCartProduct = () => {
    dispatch(createNewCart({ product: props }))
  };
  return (
    <div className="productCard">
      <div className="ImageContainer">
        <img src={props.pic} alt={"unavailable"} />
      </div>
      <div className="cardContent">
        <h1 className="name">{props.name}</h1>
        <h2 className="price">₹{props.price}</h2>
        <h2 className="rating"><GradeIcon /> {props.rating}</h2>
      </div>
      <div className="buttons">
        <Button className="heart">
          {props.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <Button className="AddToCart" onClick={addToCartProduct}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
