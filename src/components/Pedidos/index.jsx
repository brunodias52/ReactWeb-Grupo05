import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import API from "../../Service/api.js";
import "./style.css"


function Pedidos(props) {
   /*  function handleSubmit() {
        let valor = document.querySelector("#input-pesquisa").value
        let prodEncontrados = Produtos.map(prodEncontrados => {

            return prodEncontrados.value.includes(valor)
        });
        setProdutosVisiveis(prodEncontrados)
    } */

    return (
        <>
            <div className="pagpesquisa">
                <input id="input-pesquisa" 
                    type="text" 
                    placeholder="Pesquise pelo produto" 
                    value={props.search} 
                    onChange={(e) => props.setSearch(e.target.value)} 
                />

                <div className="div-pesquisar">
                    <button onClick={props.handleSearch}>Pesquisar</button>
                </div>

            </div>
        </>
    )
}   

export default Pedidos;