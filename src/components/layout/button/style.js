import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;


    a{
        color: #fff;
        text-decoration: none;
        font-size: 1.4em;
        font-weight: bold;
        background-color: ${props => props.theme.secondary};
        padding: 14px 32px;
        border-radius: 22px;
        background-color: ${props => props.color ? props.color : props.theme.secondary};
        box-shadow: 0 0 16px ${props => props.color ? props.color : props.theme.secondary};
        transition: all .35s;
    }

    a:hover{
        box-shadow: 0 0 60px ${props => props.color ? props.color : props.theme.secondary};
    }
`