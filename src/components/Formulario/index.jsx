import React, { useState } from "react";

import Titulo from "../Titulo";
import BotaoEnviar from "../Botao/BotaoEnviar";
import { Form, ContainerForm } from "./style";
import { NavLink } from "react-router-dom";


function Formulario({userData, setDataUser, handleLogin}){
    const[perfilLogin, setPerfilLogin] = useState(true);

    function handleSetPerfilLogin() {
        setPerfilLogin(!perfilLogin);
    }

    function obterTipoFormulario() {
        if(!perfilLogin){
            return (
                <>
                    <label>Nome:</label>
                    <input type="text" name="nome" />
                </>
            );
        }
    }

    return (
        <ContainerForm>
            <Form onSubmit={(e) => handleLogin(e, userData)}>
                <Titulo>{perfilLogin ? "Login" : "Registre-se"}</Titulo>
                {obterTipoFormulario()}
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={(e) => setDataUser("email", e.target.value)}
                />
                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    value={userData.senha}
                    onChange={(e) => setDataUser("senha", e.target.value)}
                />
                {perfilLogin ? (
                    <p>
                        Cadastro não efetivado,{" "}
                        <NavLink className="register" onClick={handleSetPerfilLogin} to={`/CadastroUsuario`}>Registre-se aqui</NavLink>
                    </p>
                ) : (
                    <p>
                        Já está registrado,{" "}
                        <span onClick={handleSetPerfilLogin}>Faça login</span>
                    </p>
                )}
                <BotaoEnviar />
            </Form>
        </ContainerForm>
    );
}

export default Formulario;