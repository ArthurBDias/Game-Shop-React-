import styled from "styled-components";

export const PanelGame = styled.section`
    position: relative;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
    width: 90%;
    margin: auto;
    margin-top: 12vh;
    border-radius: 22px;
`

export const Background = styled.div`
    height: 70vh;
    background: linear-gradient(90deg, rgba(20, 20, 20, .98) 32%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.20)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 22px;

    h2{
        text-align: center;
        margin-top: 25px;
        font-size: 2.2em;
    }

`

export const GameInfo = styled.div`
    padding-left: 20px;
    max-width: 30%;
    text-align: center;

    h3{
        font-size: 1.75em;
        margin-bottom: 25px;
        text-decoration: underline;
    }

    p{
        margin-top: 15px;
        font-size: 1.1em;
    }

    p.desc{
        font-size: 1em;
        width: 100%;
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

    img{
        transform: scale(1);
        border-radius: 20px;
        position: absolute;
        top: 30%;
        right: 15%;
        box-shadow: 0 0 16px white;
        transition: all .25s;
        max-width: 45%;
    }

    img:hover{
        transform: scale(1.10);
        box-shadow: 0 0 40px white;
        
    }
`