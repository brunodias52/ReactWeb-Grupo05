import React from "react";
import Header from "../../components/Header";
import { Qms } from "./style";
import Footer from "../../components/Footer";
import logo from "../../assets/img/delivery.jpg"

const QuemSomos = () => {
    return (
    <>
       <Header />
        <div className=".components">
       <Qms>
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>Guitos.LTDA</h1>
				</div>
				<div class="content">
					<h3>Distribuidora de produtos</h3>
					<p>Somos uma equipe profissional de vendas e entregas rapidas com bastante sangue no olho para entregar seu produto o mais rápido possível. Fazemos muito mais do que apenas entregar o produto. Cuidamos da segurança, fraudes, pagamentos, produtos, de toda a burocracia para você comprar na internet de uma forma simples e segura..</p>
					<div class="button">
						<a href="/">Home</a>
					</div>
				</div>
			</div>
			<div class="image-section">
				<img src={logo}/>
			</div>
		</div>
	</div>
    </Qms>
    </div>
    <Footer/>
    </>
    )
}

export default QuemSomos;