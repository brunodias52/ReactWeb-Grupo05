import React from 'react'
import {Botao} from "./style";

function BotaoPrimario (props) {
    return (
        <Botao color={props.color} onClick={() => props.acao(props.delta || null)}>
        </Botao>
    );
}

export default BotaoPrimario;