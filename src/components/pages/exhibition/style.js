import styled from "styled-components";

export const Exhibition = styled.div`
    position: relative;

    button.return{
        background: none;
        border: none;
        outline: none;
        font-size: 3em;
        color: ${props => props.theme.fontColor};
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 10;
    }

`

export const GameBillboard = styled.section`
    position: relative;

`

export const BackImage = styled.div`
    height: 50vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 30%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.30)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

`

export const GameInformation = styled.div`
    display: flex;
    @media (max-width: 1280px) {
        flex-direction: column;
    }
`

export const GameInfoCard = styled.div`
    max-width: 30%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
    transform: translate(5%, -50%);
    background-color: ${props => props.theme.primary};
    width: max-content;
    padding: 10px 30px;

    h2{
        font-size: 2.2em;
        margin-bottom: 30px;
    }

    img{
        border-radius: 20px;
        max-width: 100%;
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 20px;
    }
    
    div.buttons{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
    }

    div.buttons button:first-child{
        margin-right: 15px;
    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.8em;
        }

        p{
            font-size: 0.85em;
        }

        button  a{
        font-size: 1.3em;
        padding: 10px 26px;
        border-radius: 18px;
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
    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.8em;
        }

        p{
            font-size: 0.85em;
        }
    }

    @media (max-width: 1280px) {
        max-width: 100%;
    }
`