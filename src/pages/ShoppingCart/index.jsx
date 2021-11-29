import React, { useState } from "react";
import CartItems from "../../components/CartsItems";
import cart from "../Home";

import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import MyHome from "../Home";

const ShoppingCard = () => {
    
    function handleRemoverItem(productID){
        console.log(productID)
      }

    return (
        <>
        <div className=".components">
        <Header />
            <h1>ShoppingCard</h1>
        
        
        </div>
        </>
    )
}


export default ShoppingCard;