import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { AuthContextData } from '../../context/AuthContext';
import Formulario from '../../components/Formulario';

import Footer from '../../components/Footer';
import Header from "../../components/Header";

function Login() {
    const { userData, userAuth, setUserData, handleLogin } = 
    useContext(AuthContextData);
    console.log(userData);

    function handleSetUserData(key, value){
        setUserData({
            ...userData,
            [key]: value,
        });
    }

    if (userAuth.authenticated) {
        return <Redirect to="/CadastroUsuario"/>;
    }

    return (
        <>
        <Header/>
        <Formulario
            userData={userData}
            setDataUser={handleSetUserData}
            handleLogin={handleLogin}
        />
        <Footer/>
        </>
    );
}

export default Login;