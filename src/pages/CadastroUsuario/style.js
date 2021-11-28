import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    margin: auto;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 60%;
    min-width: 20rem;
    padding: 2rem;
    gap: 0.5rem;
    label{
        text-align: left;
        color: black;
    }
    input{
        font-size: 1.3rem;
        border-radius: 5px;
        &:focus{
            outline: 3px solid #0089FE;
        }
    }
    p{
        color: green;
    }
    span{
        color: blue;
        cursor: pointer;
    }
`