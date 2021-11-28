import React, { useState } from "react";
import api from "../../Service/api";
import {Form} from "./style"
import Titulo from "../../components/Titulo"

const userDataModel = {
    cpf: "",
    dataNascimento: "",
    email: "",
    endereco: {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        estado: "",
        numero: "",
        rua: ""
    },
    nome: "",
    usuario: ""
}

function CadastroUsuario() {
    const [userData, setUserData] = useState(userDataModel);


    function handleSetUserData(key, value) {
        setUserData({
            ...userData,
            [key]: value,
        });
    }
    function handleSetUserDataEndereco(key, value) {
        setUserData({
            ...userData,
            endereco:{
                ...userData.endereco,
                [key]: value 
            }
            
        });
    }
    console.log(userData)
    function cadastrar(e) {
        e.preventDefault();
        api.post("/cliente", userData)
            .then((response) => {
                if (response.status === 201) {
                    const { data } = response
                    alert(`Cadastro realizado`)

                    setUserData(userDataModel)
                }
            }).catch((error) => {
                alert(`${error.message} - Cadastro nao realizado`)
            })
    }

    return (

        <Form onSubmit={(e) => cadastrar(e)}>
            <Titulo>Registro de Usuário</Titulo>
            <label>CPF:</label>
            <input
                type="text"
                cpf="cpf"
                value={userData.cpf}
                onChange={(e) => handleSetUserData("cpf", e.target.value)}
            />
            <label>dataNascimento:</label>
            <input
                type="datetime-local"
                nascimento="nascimento"
                value={userData.nascimento}
                onChange={(e) => handleSetUserData("nascimento", e.target.value)}
            />
            <label>Email</label>
            <input
                type="email"
                email="email"
                value={userData.email}
                onChange={(e) => handleSetUserData("email", e.target.value)}
            />
            <label>Endereco</label>
            
            <label>Bairro</label>
            <input
                type="bairro"
                bairro="bairro"
                value={userData.endereco.bairro}
                onChange={(e) => handleSetUserDataEndereco("bairro", e.target.value)}
            />
            <label>CEP</label>
            <input
                type="number"
                cep="cep"
                value={userData.endereco.cep}
                onChange={(e) => handleSetUserDataEndereco("cep", e.target.value)}
            />
            <label>Cidade</label>
            <input
                type="text"
                cidade="cidade"
                value={userData.endereco.cidade}
                onChange={(e) => handleSetUserDataEndereco("cidade", e.target.value)}
            />
            <label>Complemento</label>
            <input
                type="text"
                complemento="complemento"
                value={userData.endereco.complemento}
                onChange={(e) => handleSetUserDataEndereco("complemento", e.target.value)}
            />
            <label>Estado</label>
            <input
                type="text"
                estado="estado"
                value={userData.endereco.estado}
                onChange={(e) => handleSetUserDataEndereco("estado", e.target.value)}
            />
            <label>Numero</label>
            <input
                type="number"
                numero="numero"
                value={userData.endereco.numero}
                onChange={(e) => handleSetUserDataEndereco("numero", e.target.value)}
            />
            <label>Rua</label>
            <input
                type="text"
                rua="rua"
                value={userData.endereco.rua}
                onChange={(e) => handleSetUserDataEndereco("rua", e.target.value)}
            />

            <label>Nome:</label>
            <input
                type="text"
                nome="nome"
                value={userData.nome}
                onChange={(e) => handleSetUserData("nome", e.target.value)}
            />
            <label>Usuario:</label>
            <input
                type="text"
                usuario="usuario"
                value={userData.usuario}
                onChange={(e) => handleSetUserData("usuario", e.target.value)}
            />

            <button type="submit">Cadastrar Usuário</button>
        </Form>

    );
}
export default CadastroUsuario;