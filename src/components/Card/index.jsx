import React, {useContext} from "react";

import Botao from "../Botao/BotaoPrimario";
import { AuthContextData } from "../../context/AuthContext";
import { ContainerCard } from "./style";

function Card({user, produto, detalhes}) {
    const {id, email, primeiro_nome, ultimo_nome} = user;
    const {id, tipo_produto} = produto;
    const {userAuth} = useContext(AuthContextData);

    function handleButtonRender() {
        if (userAuth.role === "admin") {
            return (
                <Botao delta={id} acao={detalhes}></Botao>
            );
        }
    }

    return (
        <ContainerCard role={userAuth.role}>
            <div className="info-content">
                <span>Produto: {`${tipo_produto}`}</span>
                <span>Email: {email}</span>
            </div>
            {handleButtonRender()}
        </ContainerCard>
    );
}

export default Card;