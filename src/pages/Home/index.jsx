import React from "react";

import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import "../../../src/Global.css"
import Footer from "../../components/Footer";

const MyHome = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  )
}

export default MyHome;