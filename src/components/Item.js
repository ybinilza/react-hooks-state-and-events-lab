import React, {useState} from "react";

function Item({ name, category }) {
  
 const [inCart,setState]=useState(false)

 const modeLabel = inCart ? "Remove From Cart" : "Add to Cart" ;
 const cart = inCart ? "in-cart" : ""

 function clickHandler()
 {
  setState((inCart) => !inCart)
 }
 const color = inCart ? "magenta" : ""
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler} style= {{ background: color }}>{modeLabel}</button>
    </li>
  );
}

export default Item;
