import { CardContainer } from "./style";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ProductList({ products, handleAddItem }) {

  
  console.log(products)
  return (

    <CardContainer>
      <div className="product-container">
      {products.map(product => {

        return (
          <div className="card-container" key={product.id}>
            <img src={product.fotoLink} />
            <div className="product-name">{product.nome}</div>
            <div className="product-desc"> {product.descricao} </div>
            {/* <div className="product-estoque">{product.qtdEstoque} </div> */}
            <div className="product-price"> R${product.valor} </div>
            <button className="add-cart-button" onClick={() => handleAddItem (product)}> Adicionar ao Carrinho </button>
          </div>
        );
      })}
      </div>

    </CardContainer>

  )
};
  export default ProductList;
