import React, { useState } from "react";

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

function Cadastro() {
    const [userData, setUserData] = useState(userDataModel);


    function handleSetUserData(key, value) {
        setUserData({
            ...userData,
            [key]: value,
        });
    }
    function cadastrar(e) {
        e.preventDefault();
        api.post(userData)
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

        <ContainerRegistro onSubmit={(e) => cadastrar(e)}>
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
            <input
                type="text"
                endereco="endereco"
                value={userData.endereco}
                onChange={(e) => handleSetUserData("endereco", e.target.value)}
            />
            <label>Bairro</label>
            <input
                type="bairro"
                bairro="bairro"
                value={userData.bairro}
                onChange={(e) => handleSetUserData("bairro", e.target.value)}
            />
            <label>CEP</label>
            <input
                type="number"
                cep="cep"
                value={userData.cep}
                onChange={(e) => handleSetUserData("cep", e.target.value)}
            />
            <label>Cidade</label>
            <input
                type="text"
                cidade="cidade"
                value={userData.cidade}
                onChange={(e) => handleSetUserData("cidade", e.target.value)}
            />
            <label>Complemento</label>
            <input
                type="text"
                complemento="complemento"
                value={userData.complemento}
                onChange={(e) => handleSetUserData("complemento", e.target.value)}
            />
            <label>Estado</label>
            <input
                type="text"
                estado="estado"
                value={userData.estado}
                onChange={(e) => handleSetUserData("estado", e.target.value)}
            />
            <label>Numero</label>
            <input
                type="number"
                numero="numero"
                value={userData.numero}
                onChange={(e) => handleSetUserData("numero", e.target.value)}
            />
            <label>Rua</label>
            <input
                type="text"
                rua="rua"
                value={userData.rua}
                onChange={(e) => handleSetUserData("rua", e.target.value)}
            />

            <label>Id:</label>
            <input
                type="text"
                id="id"
                value={userData.id}
                onChange={(e) => handleSetUserData("id", e.target.value)}
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

            <label>senha</label>
            <input
                type="password"
                senha="senha1"
                value={userData.senha1}
                onChange={(e) => handleSetUserData("senha1", e.target.value)}
            />


        </ContainerRegistro>

    );
}
export default Cadastro;