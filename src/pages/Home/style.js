
import styled from "styled-components";

export const CardContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    
    .product-container{
        padding-top: 8rem;
        width: 80%;
        height: auto;
        display: flex;
        margin: auto;
        text-align: center;
        font-family: 'Inter', sans-serif;
        flex-wrap: wrap;
        gap: 30px;
        padding-left: 12rem;
        .card-container{
            width: 30rem;
            height: 30rem;
            border: 1px solid black;
            border-radius: 20px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
            transition-duration: .5s;
        }
        img{
            width:80%;
            height: 65%;
        }
        .product-name{
            font-size: 30px;
            width: 100%;
        }
        .product-desc{
            font-size: 20px;
            width: 100%;
        }
        .product-price{
            font-size: 25px;
            width: 100%;
        }
        .add-cart-button{
            cursor: pointer;
            border-radius: 5px;
            width: 10rem;
            height: 2rem;
            margin: 10px auto;
            background-color: #1FB550;
        }
        .add-cart-button:hover{
            font-size: 15px;
            
        }
    }
`


//TODO media query 845 reduzir font-size
