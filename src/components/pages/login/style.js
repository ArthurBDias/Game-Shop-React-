import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    min-height: calc(90vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.section`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
    box-shadow: 1.5px 1.5px 4.5px rgba(0, 0, 0, 0.6);
`

export const FormImage = styled.aside`
    padding: 200px 140px;
    background-color: ${props => props.theme.primary};
    border-radius: 20px 0 0 20px;
    background-image: url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

`

export const FormContainer = styled.div`
   padding: 25px;
   min-width: 340px;

   h2{
    text-align: center;
    margin-bottom: 8px;
   }

   span{
    display: block;
    margin-bottom: 3px;
   }

   input{
    width: 100%;
    padding: 8px 12px;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.fontColor};
   }

   div.error_message{
    color: ${props => props.theme.secondary};
    margin-bottom: 15px;
   }

   button{
        width: 100%;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 10px;
        padding: 12px;
        cursor: pointer;
        transition: all .25s;
    }

    button:hover{
        background-color: darkgray;
    }
`