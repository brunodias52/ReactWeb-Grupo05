import React from "react";
import { CardContainer } from "./style";
import ProductList from "../ProductList";


const CartItems = ({ cart, handleRemoverItem }) => {
    return (

        <CardContainer>
          <div className="product-container">
          {cart.map(cartItem => {
    
            return (
              <div className="card-container" key={cartItem.id}>
                <img src={cartItem.fotoLink} />
                <div className="product-name">{cartItem.nome}</div>
                <div className="product-desc"> {cartItem.descricao} </div>
                {/* <div className="product-estoque">{product.qtdEstoque} </div> */}
                <div className="product-price"> R${cartItem.valor} </div>
                <button className="add-cart-button" onClick={() => handleRemoverItem (cartItem)}> Remover </button>
              </div>
            );
          })}
          </div>
    
        </CardContainer>
    
      )
};
export default CartItems;