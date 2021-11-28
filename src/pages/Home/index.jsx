import React, { useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import "../../../src/Global.css"
import Footer from "../../components/Footer";

import Pedido from "../../components/Pedidos"
import { useState } from "react";

const MyHome = () => {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  const [produtosfiltrados, setProdutosFiltrados] = useState([])
  console.log(products)

  useEffect(() => {
    axios.get(`https://ecommerce-residencia.herokuapp.com/produto`)
      .then(res => {
        const products = res.data;
        console.log(res)
        setProducts(products)
      })
  }, [])

  function handleSearch() {
    const filtrados = products.filter(p => p.nome.toLowerCase().includes(search.toLowerCase()))
    setProdutosFiltrados(filtrados)
  }
  console.log(produtosfiltrados)
  return (
    <>
      <Header />
      <Pedido search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {produtosfiltrados.length === 0 ?
        <ProductList search={search} products={products} />
        :
        <ProductList search={search} products={produtosfiltrados} />
      }
      <h1>oi</h1>
      <Footer />
    </>
  )
}

export default MyHome;