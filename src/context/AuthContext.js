import React, {useEffect, useState} from "react";
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

function AuthContext(props) {
    const [userAuth, setUserAuth] = useState(userAuthData);
    const [userData, setUserData] = useState(userDataModel);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const role = JSON.parse(localStorage.getItem("role"));
        if(token && role){
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
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

    if(loading) {
        return <h1>Loading...</h1>;
    }

    function handleLogin(e, userData) {
        e.preventDefault();
        api
        .post("/login", userData)
        .then((response) => {
            if (response.status === 200) {
                const {token} = response.data;
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("role", JSON.stringify(userData.senha));
                axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
                setUserAuth({
                    authenticated: true,
                    role: userData.senha,
                });
            }
            if (response.status === 400) {
                alert(
                    "400 - BAD REQUEST - Verifique se você preencheu corretamente os campos"
                )
            }
        })
        .catch((err) => {
            alert(`${err.message} - Tente mais tarde`);
        });
    }

    return (
        <AuthContextData.Provider
        value={{ userData, userAuth, setUserData, logout, handleLogin, loading}}>
            {props.children}
        </AuthContextData.Provider>
    )   
}

export default AuthContext;