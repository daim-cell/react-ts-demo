import React from "react";

import "./Styles/Product.css";
type productProps = {
    name: string,
    price: number,
    id: number,
    imgURL: string
}
const Product = (props:productProps) => {
  return (
    <div className="card">
      <img src={props.imgURL} alt={props.name} />
      <h2>{props.name}</h2>
      <p>$ {props.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;