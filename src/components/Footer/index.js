import { FooterBox } from "./style"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterBox>

            <footer className="main-footer">
                <section className="footer">
                    <div className="social">
                        <a href="#"><i className="fab fa-instagram"> <FaInstagram /> </i></a>
                        <a href="#"><i className="fab fa-facebook"> <FaFacebook /> </i></a>
                        <a href="#"><i className="fab fa-twitter"> <FaTwitter /> </i></a>
                    </div>

                    <ul className="list">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <a href="#">Quem somos</a>
                        </li>
                    </ul>
                    <p className="copyright">
                        GuitosStore @ 2021
                    </p>
                </section>
            </footer>
        </FooterBox>
    )
}


export default Footer;