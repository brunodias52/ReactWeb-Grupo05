import React from 'react';
import { CardContainer } from "./style"


export default class ProductList extends React.Component {
  render() {
    return (

      <CardContainer>
        <div className="product-container">
        {this.props.products.map(product => {

          return (
            <div className="card-container" key={product.id}>
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