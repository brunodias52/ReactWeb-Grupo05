import React, { useState, useEffect } from "react";
import api from "../Service/api";
import axios from 'axios';

export const userAuthData = {
    authenticated: false,
    role: "",
};

export const AuthContextData = React.createContext(null);

const userDataModel = {
    email: "",
    senha: "",
};

function AuthContext(props) { /*precisa englobar toda minha aplicação.*/
    const [userAuth, setUserAuth] = useState(userAuthData);
    const [userData, setUserData] = useState(userDataModel);
    const [list, setList] = useState([
        {
            email: "teste@teste.com",
            senha: "1234"
        },
        {
            email: "outroteste@gmail.com",
            senha: "98765"
        },
        {
            email: "usuariologado@bol.com.br",
            senha: "12345"
        }
    ]);
    const [loading, setLoading] = useState(true);
    console.log(userData);
    useEffect(() => { /*dispara assim que a página for carregada.*/
        const token = JSON.parse(localStorage.getItem("token"));
        const role = JSON.parse(localStorage.getItem("role"));
        if (token && role) {
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
            setUserAuth({
                authenticated: true,
                role: role,
            });
        }

        setLoading(false);
    }, []);

    function logout() {
        setUserAuth(userAuthData);
        localStorage.removeItem("token");
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    function handleLogin(e, userData) {
        e.preventDefault();
        const objetoLocalizado = list.filter(user => user.email === userData.email)
        if (objetoLocalizado[0]) {
            if (objetoLocalizado[0].senha === userData.senha){
                setUserAuth({
                    authenticated: true,
                    role: "admin"
                })
                alert("Usuário logado com sucesso!")
            }
            else{
                alert("Senha incorreta!")
            }
            
        } else {
            alert("Usuário não localizado!")
        }
    }

    return (
        <AuthContextData.Provider
            value={{ userData, userAuth, setUserData, logout, handleLogin, loading }}>
            {props.children}
        </AuthContextData.Provider>
    );
}

export default AuthContext;