import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleCart () {
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={inCart ? "remove" : "add"}>{inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
