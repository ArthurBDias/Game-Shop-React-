import styled from "styled-components";

export const GameCard = styled.div`
    margin-right: 15px;
    border-radius: 20px;
    transform: scale(0.95);
    transition: all .25s;
    position: relative;

    &:hover{
        transform: scale(1);
    }
  
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    img{
        width: 100.5%;
        border-radius: 20px;

    }

    svg{
        font-size: 1.45em;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    svg.small{
        font-size: 1.2em;
    }

`