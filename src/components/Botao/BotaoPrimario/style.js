import styled from 'styled-components';

export const Botao = styled.button`
    width: 10%;
    height: 2rem;
    font-size: 1rem;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
    transition: 0.4s;
    &:hover{
        cursor: pointer;
        filter: brightness(1.0)
}
`
