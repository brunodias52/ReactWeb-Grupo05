import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { AuthContextData } from '../../context/AuthContext';
import Formulario from '../../components/Formulario';

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
        return <Redirect to="/" />;
    }

    return (
        <Formulario
            userData={userData}
            setDataUser={handleSetUserData}
            handleLogin={handleLogin}
        />
    );
}

export default Login;