import styled from "styled-components";

export const FooterBox = styled.div`

.main-footer{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;

}

footer {
    padding: 40px 0;
    background-color: #48B8E5;
}

.footer .social{
    text-align: center;
    padding-bottom: 25px;
    color: #4b4c4d;
}

.footer .social a{
    font-size: 24px;
    border: 1px solid #ccc;
    width: 35px;
    height: 35px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px;
    opacity: .75;
    text-decoration: none;
    color: white;
}

.footer .social a:hover{
    opacity: 100;
}

.footer ul{
    margin-top: 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
    color: white;
}

.footer ul li a{
    color: inherit;
    text-decoration: none;
    opacity: .8;
}

.footer ul li{
    display: inline-block;
    padding: 0 15px;

}

.footer ul li a:hover{
    opacity: 1;
}

.footer .copyright{
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    color: grey;

}
`