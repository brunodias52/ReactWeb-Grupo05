import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    margin: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 30%;
    min-width: 20rem;
    padding: 2rem;
    margin-bottom: 11rem;
    gap: 0.5rem;
    label{
        text-align: left;
        color: #fff;
    }
    input{
        font-size: 1.3rem;
        border-radius: 5px;
        &:focus{
            outline: 3px solid #0089FE;
        }
    }
    p{
        color: #fff;
    }
    span{
        color: #0089FE;
        cursor: pointer;
    }

    .register{  
        text-decoration: none;
        color: purple;
        font-size: 30px;
    }
`