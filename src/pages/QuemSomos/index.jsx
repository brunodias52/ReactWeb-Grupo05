import React from "react";
import Header from "../../components/Header";
import { Qms } from "./style";
import Footer from "../../components/Footer";

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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="button">
						<a href="">i</a>
					</div>
				</div>
			</div>
			<div class="image-section">
				<img src="./img/abnermoveis.jpg"/>
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