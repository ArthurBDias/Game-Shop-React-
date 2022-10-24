import styled from "styled-components";

export const Exhibition = styled.div`
    position: relative;

    button.return{
        user-select: none;
        background: none;
        border: none;
        outline: none;
        font-size: 3em;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 10;
    }

`

export const GameBillboard = styled.section`
    position: relative;
    max-height: 100vh;

`

export const BackImage = styled.div`
    user-select: none;
    height: 50vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 30%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.30)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);

`

export const GameInformation = styled.div`
    display: flex;
    @media (max-width: 1060px) {
        flex-direction: column;
    }
`

export const GameInfoCard = styled.div`
    width: max-content;
    max-width: 30%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
    transform: translate(5%, -50%);
    display: block;
    background-color: ${props => props.theme.primary};
    width: max-content;
    padding: 10px 30px;
    border-radius: 25px;
    user-select: none;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);



    h2{
        font-size: 2.2em;
        margin-bottom: 30px;
        user-select: text;

    }

    img{
        border-radius: 20px;
        max-width: 100%;
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 20px;
        user-select: text;

    }
    
    div.buttons{
        margin-top: 35px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
    }

    div.buttons button:first-child{
        margin-right: 15px;
    }

    @media (max-width: 1600px) {
        h2{
            font-size: 1.7em;
        }

    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.45em;
        }

        button  a{
        font-size: 1.15em;
        padding: 8px 22px;
        border-radius: 18px;
        }
    }

    @media (max-width: 1060px) {
        max-width: 90%;
        margin-left: 50%;
        transform: translate(-50%, -50%);

        button  a{
        font-size: 1.6em;
        padding: 10px 28px;
        border-radius: 22px;
        }
        
    }
   
`

export const GameDesc = styled.div`
    margin-left: 7%;
    max-width: 60%;

    h2{
        font-size: 2.2em;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    p{
        text-align: center;
        font-size: 0.9em;
        max-width: 100%;

        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 14; 
        -webkit-box-orient: vertical;
    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.8em;
        }

        p{
            font-size: 0.85em;
            margin-left: 15px;
        }
    }

    @media (max-width: 1060px) {
        max-width: 100%;
        margin-left: 0;
        text-align: center;
        margin-top: -20%;
    }
`

export const GameMinimumRequirements = styled.section`

    padding-left: 30px;

    h2{
        margin-bottom: 1.3em;
        text-align: center;
    }


    div.flex_container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10vh;
    }

    div.colunm{
        text-align: left;
        text-align: left;
    }

    div.colunm:first-child{
        margin-right: 3em;
    }

    div.colunm h3{
        background-color: ${props => props.theme.primary};
        padding: 3.5px;
    }

    div.colunm p{
        margin-top: 3px;
        margin-bottom: 20px;
    }

    div.browser_requirements{
        text-align: center;
        max-width: 65%;
        font-size: 1.1em;
    }

    div.browser_requirements p:first-child{
        margin-bottom: 20px;
    }

    div.browser_requirements p:last-child{
        margin-bottom: 12vh;
    }

 

`

export const GameScreenshots = styled.section`

    margin-bottom: 20vh;

    .swiper-button-prev, .swiper-button-next{
        height: 0 !important;
        width: 0 !important;
        color: ${props => props.theme.fontColor} !important;
        padding: 45px;
        transition: all .3s;
        border-radius: 50%;

    }

    .swiper-button-prev{
        left: 5%;
    }

    .swiper-button-next{
        right: 5%;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        background-color: rgba(0, 0, 0, 0.85);
    }

    h2{
        text-align: center;
        font-size: 1.9em;
        margin-bottom: 25px;
    }

  

    @media (max-width: 1060px) {
        margin-top: 40px; 
    }
`

export const ScreenshotImage = styled.div`
    width: 80%;
    height: 80vh;
    border-radius: 25px;
    background-image: url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
`