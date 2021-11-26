import React, { useEffect, useState } from "react";
import API from "../../Service/api.js";
import "./style.css"

function Pedidos(props) {

    const [Produtos,setProdutos] = useState([])
    const [ProdutosVisiveis,setProdutosVisiveis] = useState([])

    function onLoad() {
        API.get(`/produto`).then(response => {
            setProdutosVisiveis(response.data)
            setProdutos(response.data)
        })
    }

    function handleSubmit() {
        let valor = document.querySelector("#input-pesquisa").value
        let prodEncontrados = Produtos.filter(produto => {
            
                return produto.name.includes(valor)
                   
        })
        setProdutosVisiveis(prodEncontrados)
    }

    useEffect(() => {
        onLoad()
    }, [])

    return (
        <>
            <div className="pagpesquisa">
            <label>
                Faça seu Pedido
            </label>

            <div className="barra-pesquisa">
            <input id="input-pesquisa" type="text"/>
            </div>
            
            <div className="div-pesquisar">
            <button onClick={handleSubmit}>Pesquisar</button>
            </div>
            <div> { 
            ProdutosVisiveis.map(produto => {   
                return  <h1 key={produto.id}>{produto.name}</h1>               
            })           
            }</div>
            </div>
        </>
    )
}

export default Pedidos;