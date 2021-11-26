import React from 'react';

import axios from 'axios';
import { CardContainer } from "./style"


export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`https://ecommerce-residencia.herokuapp.com/produto`)
      .then(res => {
        const products = res.data;
        this.setState({ products });

      })
  }

  render() {
    return (

      <CardContainer>
        <div className="product-container">
        {this.state.products.map(product => {

          return (
            <div className="card-container">
              <img src={product.fotoLink} />
              <div className="product-name">{product.nome}</div>
              <div className="product-desc"> {product.descricao} </div>
              {/* <div className="product-estoque">{product.qtdEstoque} </div> */}
              <div className="product-price"> R${product.valor} </div>
              <button className="add-cart-button"> Adicionar ao Carrinho </button>
            </div>
          );
        })}
        </div>

      </CardContainer>

    )
  }
}