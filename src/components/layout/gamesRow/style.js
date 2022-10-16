import styled from "styled-components";

export const GamesRow = styled.section`
    .swiper-button-prev, .swiper-button-next{
        height: 0 !important;
        width: 0 !important;
    color: white !important;
    padding: 45px;
    transition: all .3s;
    border-radius: 50%;

    }

    .swiper-button-prev{
        left: 0;
    }

    .swiper-button-next{
        right: 0;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        background-color: rgba(0, 0, 0, 0.85);
    }
`