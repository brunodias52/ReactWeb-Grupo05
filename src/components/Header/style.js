import styled from 'styled-components';

export const HeaderBox = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body {
  background-color: white;
  margin: auto;
  padding: 0px;
  overflow-x: hidden;
  background-repeat: repeat;
  font-family: 'Inter', sans-serif;
  display: grid;
}
.container {
  width: 100%;
	padding-right:15px;
	padding-left:15px;
	margin-right:auto;
	margin-left:auto
}
img {
  max-width: 100%;
  height: auto;
}

.navBar .logo img {
  float: left;
  max-height: 120px;
}
.is-active {
  color: #ff5800!important;
}

ul.main-menu {
  display: inline-flex;
  list-style: none;
  margin: 0px auto 0;
  padding: 0;
  float: right;
  z-index: 7;
}
ul.main-menu>li.menu-item:first-child {
  padding-left: 0;
  margin-left: 0;
}
.menu-item {
  line-height: 23px;
}
li {
  list-style-type: none;
}
.menu-item a {
  font-size: 25px;
  font-weight: 600;
  line-height: 40px;
  font-family: 'Inter', sans-serif;
  position: relative;
  display: block;
  color: #545050;
  margin: 27px 17px;
  text-decoration: none;
  cursor: pointer;
}
.header__middle__logo{
  width: 20%;
  display: inline-block;
  float: left;
}
.header__middle__menus {
  width: 70%;
  display: inline-block;
  float: left;
}

.header__middle {
  display: flex;
  width: 100%;
  float: left;
  border-bottom: 1px dashed lavender;
  position: relative;
}
.header__middle__logo > a > h1 {
  color: #07a8ff;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 33px;
}

.header__middle__menus span.text {
  position: absolute;
  right: 177px;
  bottom: 10px;
  font-size: 14px;
  color: #ff1800;
}


/* Responsividade */

@media (max-width:767px) { 
  .header__middle .active {color: #ff3d00!important;}
}

.menu-item:hover > a{
  color: #07a8ff !important;
}

.header__middle__logo img{
  max-width: 207px;
  margin: 17px 0 0 0;
}


@media(max-width:991px){
.header__middle__logo {width: 77%;}
.header__middle__menus {width: 20%;}
.header__middle__logo img {max-width: 197px;margin: 27px 0 0 0;}
.main-nav .menubar__button:hover {background-color: #f44336;}
.main-nav .menu-item:hover > a {color: #07a8ff !important}
.main-nav .menubar__button {
  display: block!important;
  float: right;
  background-color: #080808;
  color: #fff;
  padding: 6px 7px;
  border-radius: 5px;
  margin: 27px auto 0;
  cursor: pointer;
  position: relative;
  z-index: 10037;
}
.main-nav .menubar__button svg{font-size: 27px;}
.main-nav ul.menutipo2 {
  display: block!important;
  position: absolute;
  left: 0;
  z-index: 10007;
  background-color: #d8f1ff;
  border-bottom: 3px solid #ff3d00;
  right: 0;
  padding-bottom: 17px;
  padding-top: 57px;
}
.main-nav .menu-item a {margin: 10px 17px;text-align: center;color: #000000;}
.main-nav  ul.main-menu {display: none}

}
`

