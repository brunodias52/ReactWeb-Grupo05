import React from "react";

import Header from "../../components/Header";

import ProductList from "../../components/ProductList";

import "../../../src/Global.css"
import Footer from "../../components/Footer";

import Pedido from "../../components/Pedidos"

const MyHome = () => {

    return (
      <>

        <Header/>
        <Pedido/>
        <ProductList />
        <h1>oi</h1>
        <Footer/>
        
        </>
    )
}

export default MyHome;