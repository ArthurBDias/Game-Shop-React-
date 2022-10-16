import styled from "styled-components";

export const FeaturedGames = styled.section`
    width: 100%;
    height: calc(100vh - 50px);
    position: relative;

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

    h2{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 12px;
        font-size: 22px;
        background-color: ${props => props.theme.background};
        z-index: 10;
        text-align: center;
    }

    h3{
        color: white;
        font-size: 2.2em;
        position: absolute;
        left: 50%;
        transform: translate(-50%) ;
        top: calc(5% + 50px);
        text-shadow: 2px 2px 5px black;
    }

    button{
        position: absolute;
        left: 50%;
        transform: translate(-50%) ;
        bottom: 10%;
        outline: none;
        border: none;
        cursor: pointer;
        
    }

    button a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        font-size: 1.4em;
        font-weight: bold;
        background-color: ${props => props.theme.secondary};
        padding: 14px 32px;
        border-radius: 8px;
        box-shadow: 0 0 16px ${props => props.theme.secondary};
        transition: all .35s;
    }

    button a:hover{
        box-shadow: 0 0 60px ${props => props.theme.secondary};
    }
`

