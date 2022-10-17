import styled from "styled-components";

export const PanelGame = styled.section`
    margin-top: 10vh;
`

export const Background = styled.div`
    height: 70vh;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.80) 30%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.20)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

    h2{
        text-align: center;
        margin-top: 25px;
        font-size: 2.2em;
    }

`

export const GameInfo = styled.div`
    padding-left: 20px;

    h3{
        font-size: 1.75em;
        margin-bottom: 25px;
    }

    p{
        margin-top: 15px;
        max-width: 45%;
        font-size: 1.1em;
    }

    p.desc{
        font-size: 1em;
        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;
    }

    button{
        margin-top: 35px;
        margin-left: 15px;
    }
`