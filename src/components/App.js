import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {

const [isDarkMode, setIsDarkMode] = useState(true)

const handleClick = (event) => {
setIsDarkMode(isdarkMode => !isDarkMode)
}




  return (
    <div className={isDarkMode ? "App Light" : "App dark"}>
      <header>
        <h2>Shopster</h2> 
        <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;
