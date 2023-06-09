import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const[isOn,setIsOn]=useState(false)
  
  

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"
  const modeLabel = isOn ? "Dark Mode" : "Light Mode"
  
   function clickHandler()
   {
          setIsOn((isOn) => !isOn)

   }
 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickHandler}>{modeLabel}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;