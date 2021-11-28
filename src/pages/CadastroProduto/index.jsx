import React, { useState } from "react";
import api from "../../Service/api";
/*TODO import {ContainerRegistro} from "./style"       rever o edereco*/
import Titulo from "../../components/Titulo"

const productDataModel = {
    "dataFabricacao": "",/* TODO temos de rever este metodo para completar automatico*/
    "descricao":"",
    "fotoLink": "",
    "idCategoria": "",
    /* "idFuncionario": "",*/
    "nome":"",
    /*"nomeCategoria": "",*/
    "qtdEstoque": "",
    "valor": ""
}
function CadastroProduto() {
    const [productData, setProductData] = useState(productDataModel);
    function handleSetProductData(key, value) {
        setProductData({
            ...productData,
            [key]: value,
        });
    }
    
    console.log(productData)
    function cadastrar(e) {
        e.preventDefault();
        api.post("/produto", productData) /* TODO verificar endereco apos a pasta estar atualizada*/
                    .then((response) => {
                if (response.status === 201) {
                    const { data } = response
                    alert(`Produto Cadastrado`)

                    setProductData(productDataModel)
                }
            }).catch((error) => {
                alert(`${error.message} - Produto não cadastrado`)
            })
    }

    return (

        <form onSubmit={(e) => cadastrar(e)}>
            <Titulo>Cadastro de Produtos</Titulo>
            <label>Data e Hora Registro:</label>
            <input
                type="text"
                dataFabricacao="dataFabricacao"
                value={productData.dataFabricacao}
                onChange={(e) => handleSetProductData("dataFabricacao", e.target.value)}
            />
           <label>Descricao:</label>
            <input
                type="text"
                descricao="dataDescricao"
                value={productData.descricao}
                onChange={(e) => handleSetProductData("descricao", e.target.value)}
            />
            <label>FotoLink:</label>
            <input
                type="text"
                fotoLink="dataFotoLink"
                value={productData.fotoLink}/* TODO verificar trecho*/
                onChange={(e) => handleSetProductData("fotoLink", e.target.value)}
            />
             <label>Categoria:</label>
            <input
                type="text"
                idCategoria="dataIdCategoria"/* TODO ver se o de cima está certo*/
                value={productData.idCategoria}/* TODO verificar trecho*/
                onChange={(e) => handleSetProductData("idCategoria", e.target.value)}
            />
            <label>Nome:</label>
            <input
                type="text"
                nome="dataNome"
                value={productData.nome}/* TODO verificar trecho*/
                onChange={(e) => handleSetProductData("nome", e.target.value)}
            />
            <label>Estoque:</label>
            <input
                type="text"
                qtdEstoque="dataQtdEstoque"
                value={productData.qtdEstoque}/* TODO verificar trecho*/
                onChange={(e) => handleSetProductData("qtdEstoque", e.target.value)}
            />
            <label>Valor:</label>
            <input
                type="text"
                valor="dataValor"
                value={productData.valor}/* TODO verificar trecho*/
                onChange={(e) => handleSetProductData("valor", e.target.value)}
            />
            
            </form>
    )
    }
    export default CadastroProduto;