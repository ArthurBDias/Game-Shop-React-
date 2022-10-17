import styled from "styled-components";

export const GamesRow = styled.section`

    margin-top: 15vh;
    padding: 0 0 15px 25px;
    background-color: ${props => props.theme.primary};

    h2{
        margin-bottom: 15px;
        font-size: 2.2em;
    }

    .swiper-button-prev, .swiper-button-next{
        height: 0 !important;
        width: 0 !important;
        color: white !important;
        padding: 40px;
        transition: all .3s;
        border-radius: 50%;
        top: 45% !important;

    .swiper-button-prev, .swiper-button-next{
        height: 0 !important;
        width: 0 !important;
        color: white !important;
        padding: 45px;
        transition: all .3s;
        border-radius: 50%;

    }

    .swiper-button-prev{
        left: 10px;
    }

    .swiper-button-next{
        right: 10px;
        left: 0;
    }

    .swiper-button-next{
        right: 0;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        background-color: rgba(0, 0, 0, 0.85);
    }
`