import styled from "styled-components";

export const FeaturedGames = styled.section`
    width: 100%;
    height: calc(100vh - 50px);
    position: relative;

    h2{
        position: absolute;
        top: 5%;
        left: 40px;
        padding: 6px 12px;
        font-size: 22px;
        background-color: ${props => props.theme.primary};
        z-index: 10;
        text-align: center;
    }

    .swiper-button-prev, .swiper-button-next{
    color: white !important;
    height: calc(100% + 50px) !important;
    top: 0 !important;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0 20px;
    transition: all .3s;

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

    .swiper-pagination-bullet{
    width: 14px !important;
    height: 14px !important;
    transition: all .3s;
    }

.swiper-pagination-bullet:hover{
    width: 16px !important;
    height: 16px !important;
    opacity: 0.7;
}

.swiper-pagination-bullet-active{
    width: 16px !important;
    height: 16px !important;
    background-color: ${props => props.theme.secondary};

}

   
`

export const FeaturedImage = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    background-image: url(${props => props.imageURL});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
`

export const FeaturedInfo = styled.div`
    width: 100%;
    height: 100%;
    z-index: 10;
    position: relative;

    h3{
        font-size: 2.2em;
        position: absolute;
        left: 50%;
        transform: translate(-50%) ;
        top: 5%;
        text-shadow: 3px 3px 6px ${props => props.theme.background};
    }

    button{
        position: absolute;
        left: 50%;
        transform: translate(-50%) ;
        bottom: 10%;
        color: ${props => props.theme.fontColor};
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 1.4em;
        font-weight: bold;
        background-color: ${props => props.theme.secondary};
        padding: 12px 28px;
        border-radius: 8px;
        box-shadow: 0 0 12px ${props => props.theme.secondary};
        transition: all .35s;
    }

    button:hover{
        box-shadow: 0 0 45px ${props => props.theme.secondary};
    }
`

