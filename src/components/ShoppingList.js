import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

   
  let selectedState = selectedCategory === "All" ? items : items.filter(state => state.category === selectedCategory)
    console.log(selectedState)
  
  
 const handleSelection = (e) => {
  return setSelectedCategory(e.target.value)
  

}

const displaySelectedCategory = items.filter((item)=> {


  if (selectedCategory === "All") return true

return item.category === selectedCategory


})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displaySelectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}  />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
