import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import API from "../../Service/api.js";
import {BarraPesquisa} from "./style.js"


function Pedidos(props) {

    return (
        <>
            <BarraPesquisa>
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
            </BarraPesquisa>
        </>
    )
}   

export default Pedidos;