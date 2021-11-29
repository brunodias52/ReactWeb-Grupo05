import React, { useEffect } from "react";
import { useState } from "react";


import api from "../../../src/Service/api.js"
import ProductList from "../../components/ProductList";
import "../../../src/Global.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pedido from "../../components/Pedidos"
import CartItems from "../../components/CartsItems";
import ShoppingCard from "../ShoppingCart";
import { CardContainer } from "./style.js";

const MyHome = () => {
  const [search, setSearch] = useState("")
  const [produtosfiltrados, setProdutosFiltrados] = useState([])
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get(`/produto`)
      .then(res => {
        const products = res.data;
        setProducts(products)
      })
  }, [])

  
    console.log(cart)
    function handleAddItem(product){
      console.log(product)
      alert(product);
      setCart([...cart, product]);
      };

  function handleRemoverItem(productID){
    console.log(productID)
    const filteredCart = cart.filter( productID => cart.indexOf(productID) !== productID);
    setCart(filteredCart);
  }
  

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
        <ProductList search={search} products={products} handleAddItem={handleAddItem}/>
        :
        <ProductList search={search} products={produtosfiltrados} handleAddItem={handleAddItem}/>
      }
      <CardContainer>
      <div className="scart">
      ↓Carrinho↓
      </div>
      </CardContainer>
      
      <CartItems cart={cart} handleRemoverItem={handleRemoverItem}/>
      <Footer />
    </>
  );
};

export default MyHome;