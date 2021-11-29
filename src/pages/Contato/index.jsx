import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Ct } from "./style";

const Contato = () => {
    return (

        <div className=".components">
        <Header/>
        <Ct>
        <div className="body">
        <div class="container">
        <div class="content">
            <div class="left-side">
                <div class="endereco details">
                    <i></i>
                    <div class="topic1">Endereço</div>
                    <div class="text-one">Cascatinha, 915f</div>
                    <div class="text-two">Petrópolis, RJ</div>
                </div>
                <div class="tel details">
                    <i></i>
                    <div class="topic">Telefone</div>
                    <div class="text-one">+5505672896344</div>
                    <div class="text-two">+5505337196710</div>
                </div>
                <div class="email details">
                    <i></i>
                    <div class="topic">Telefone</div>
                    <div class="text-one">Guitostore@coldmail.com</div>
                    <div class="text-two">Guitostore@fmail.com</div>
                </div>
            </div>
            <div class="right-side">
                <div class="topic2">Mande uma menssagen</div>
                <p>Caso você queira entrar em contato conosco preencha o formulário </p>
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Digite seu email"/>
                </div>
                <div class="message-box">
                   <textarea></textarea>
                </div>
                <div class="button">
                    <input type="button" value="Enviar"/>
                </div>
            </form>
            </div>
        </div>
    </div>
        </div>
        </Ct>
        <Footer/>
        </div>
    )
}

export default Contato;