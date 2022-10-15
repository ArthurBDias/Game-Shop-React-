import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.theme.primary};
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
`

export const IconContainer = styled.div`
   h2 a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        transition: all .4s;
   }

   h2 a:hover{
        color: ${props => props.theme.secondary};
   }
`

export const NavigateContainer = styled.nav`


    ul li{
        margin-left: 30px;
        display: inline-block;
        cursor: pointer;
        transition: all .35s;
        border-radius: 6px;
        font-size: 1.15em;
    }

    ul li:hover{
        color: ${props => props.theme.secondary};
    }
`

export const ProfileContainer = styled.div`
    svg{
        color: ${props => props.theme.fontColor};
        transition: all .35s;
        cursor: pointer;
        padding: 8px;
        font-size: 2.6em;
        border-radius: 50%;
        margin-left: 10px;
    }


    svg:hover{
        background-color: ${props => props.theme.secondary};
    }
`