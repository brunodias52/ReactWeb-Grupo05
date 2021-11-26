import styled from 'styled-components'

export const ContainerCard = styled.div`
    margin: auto;
    display: flex;
    min-width: 20rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: ${props => props.role === 'admin' ? '65%' : '30%'};
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #7777;
    margin-bottom: 1rem;

    .info-content{
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
        color: #fff;
    }
`