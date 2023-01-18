import React from "react";
import Navbar from "./Navbar/Navbar";
import './App.css'
import Cart from "./CartShop/Cart";
import ItemListContainer from "./h1/ItemListContainer";
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer texto="Fron Fitness - Suplementos"/>
    <Cart cantCarrito={7}/>
  
    </>
  );
}

export default App;
