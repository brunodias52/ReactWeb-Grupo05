import React, { useState } from "react";
import CartItems from "../../components/CartsItems";
import cart from "../Home";
import { useCart } from "react-use-cart";

import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import MyHome from "../Home";

const ShoppingCard = () => {
    const{
        removeItem,
    } = useCart();
    
    function handleRemoverItem(productID){
        
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