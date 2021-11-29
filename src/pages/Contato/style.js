import styled from "styled-components";

export const Ct = styled.div`

.body{
   
    margin-bottom: 20rem;
    min-width: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    margin-top: 10rem;
    width: 80%;
    background-color: white;
    border-radius: 6px;
    padding: 20px 60px 40px 40px;
    box-shadow: 0 5px 10px rgba(0,0,0,0);
}

.container .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .content .left-side{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
}
.container .left-side::before{
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: gray;
}

.content .left-side .details{
    margin: 14px;
    text-align: center;
}
.content .left-side .details i{
    font-size: 30px;
    color: #800080;
    margin-bottom: 10px;
}

.content .left-side .details .topic1{
    font-size: 18px;
    font-weight: 500;
}

.content .left-side .details .text-one,
.content .left-side .details .text-two{
    font-size: 14px;
    color: #8400ff;
}

.container .content .right-side{
    width: 75%;
    margin-left: 75px;
}

.content .right-side .topic2{
    font-size: 23px;
    font-weight: 600;
    color: #8400ff;
}

.right-side .input-box{
    height: 50px;
    width: 100%;
    margin: 12px 0;
}

.right-side .input-box input{
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    border-radius: 6px;
    background-color: #F0F1F8;
    padding: 0 15px;
    resize: none;
}

.right-side .message-box textarea{
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    border-radius: 6px;
    background-color: #F0F1F8;
    padding: 0 15px;
    min-width: 110px;
    resize: none;
    margin-top: 6px;
}

.right-side .button {
    display: inline-block   ;
    margin-top: 12px;
}

.right-side .button input[type="button"]{
    color: white;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: #8400ff;
    cursor: pointer;
    transition: all .3s ease;
}

.button input[type="button"]:hover{
    background-color: purple;
    
}

@media (max-width: 952px ){
    .container{
        width: 80%;
        padding: 20px 35px 40px 35px;
        
    }
}

@media (max-width: 820px ){
    .container{
        margin: 40px 0;
        height: 100%;
    }
    .container .content{
        flex-direction: column-reverse;
    }
    .container .content .left-side{
        width: 100%;
        flex-direction: row;
        margin-top: 40px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .container .content .left-side::before{
        display: none;
    }

    .container .content .right-side{
        width: 100%;
        margin-left: 0;

    }
}
`

