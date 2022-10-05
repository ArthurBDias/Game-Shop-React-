import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        scrollbar-color: #222 darkgray;
        min-height: 150vh;
    }

    body{
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.primary};

    }

    body::-webkit-scrollbar{
        width: 12px;
    }
 
    body::-webkit-scrollbar-track {
    background: darkgray;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
    background-color: #222;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }
`

export default GlobalStyle