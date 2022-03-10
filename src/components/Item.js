import React, { useState } from "react";

function Item({ name, category }) {
const [isInCart, setIsinCart] = useState(true)

const handleCartClick = (event) => {
  setIsinCart(isInCart => !isInCart)
}

  return (
    <li className={isInCart ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{isInCart ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
} 

export default Item;

