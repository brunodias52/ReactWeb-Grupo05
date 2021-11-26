import React from 'react';

import axios from 'axios';
import {CardContainer} from "./style"


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
              <div className="product-name">
        { this.state.products.map(product => <span>{product.nome}</span>)}
              </div>
        { this.state.products.map(product => <span>{product.descricao}</span>)}
        { this.state.products.map(product => <span>{product.qtdEstoque}</span>)}
        { this.state.products.map(product => <span>{product.valor}</span>)}
        { this.state.products.map(product => <img src={product.fotoLink}/>)}
         </div>
         </CardContainer>


    )
  }
}