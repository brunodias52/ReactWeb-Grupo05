import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle } from "react-icons/fi"; /* Importe de ícones do react */

import logo from "../../assets/img/logo-temporario.png" /* Importe do logo */
import { HeaderBox } from './style';


const Header = () => {

    const [isMenu, setisMenu] = useState(false);

    /* Menu drop-down inicia fechado */
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false); 
    };

    /* Alterando o tipo de menu */
    const boxClass = ["main-menu"];
    if(isMenu) {
        boxClass.push('menutipo2');
    }else{
        boxClass.push('');
    }

        return (
            <HeaderBox>
                <header className="header__middle">
                    <div className="container">
                        <div className="row">

                            {/* Adicionando o logo  */}
                            <div className="header__middle__logo">
                                {/* Redireciona para o Home */}
                                <NavLink exact activeClassName='is-active' to="/">
                                    <img src={logo} alt="logo" /> 
                                </NavLink>
                            </div>


                            <div className="header__middle__menus">
                                {/* Menu Principal */}
                                <nav className="main-nav " >

                                    {/* Incluindo os botões de menu drop-down responsivo */}
                                    {isResponsiveclose === true ? <> 
                                    {/* Se o menu estiver aberto, aparece o ícone com X para fechar */}
                                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                    </> : <> 
                                    {/* Se estiver fechado, aparece ícone tipo hamburguer para abrir */}
                                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                    </>}


                                    <ul className={boxClass.join(' ')}>
                                        {/* Submenu */}
                                        <li  className="menu-item" >
                                        {/* Redirecionamentos */}
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> </li>
                                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/QuemSomos`}> Quem Somos </NavLink> </li>
                                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contato`}> Contato </NavLink> </li>
                                        <li className="menu-item " ><NavLink onClick={toggleClass}
                                        activeClassName='is-active' to={'/Login'}> Login </NavLink></li>

                                    </ul>
                               </nav>     
                            </div>   
                        </div>
                    </div>
                </header>
            </HeaderBox>
        )
    }

export default Header;