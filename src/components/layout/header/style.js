import styled, {keyframes} from "styled-components";

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
    user-select: none;

    @media (max-width: 1125px) {
        justify-content: space-between;
        padding: 10px 35px;
    }
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

   @media (max-width: 640px) {
        font-size: .8em;
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

    ul li a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    ul li:hover, ul li a:hover{
        color: ${props => props.theme.secondary};
    }

    ul li span{
        transition: all .35s;
    }


    ul li span:hover{
        color: ${props => props.theme.secondary};
    }

    li.categories{
        position: relative;
    }

    li.categories:hover{
        color: ${props => props.theme.fontColor};
    }

    ul.categories_menu{
        font-size: .95em;
        min-width: max-content;
        background-color: ${props => props.theme.primary};
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        top: calc(100% + 14px);
        left: 0;
        padding: 4px 0;
        border-radius: 4px;
    }

    ul.categories_menu a{
        transition: all .3s;
        font-size: .95em;
        padding: 5px 80px 8px 8px;
        width: 100%;
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        height: 100%;
        width: 100%;
    }

    ul.categories_menu a:hover{
        text-decoration: underline;
        background-color: ${props =>props.theme.background};
    }

    ul.active{
        display: flex !important;
        animation: showSmooth .5s;
    }

    @keyframes showSmooth {
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
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

export const MobileMenu = styled.div`

    svg{
        font-size: 1.6em;
        cursor: pointer;
    }

    div.menu_mobile{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        right: -45vw;
        top: 38px;
        min-width: 40vw;
        height: 100vh;
        background-color: ${props => props.theme.primary};
        transition: all .5s;
        padding: 30px;
    }

    div.menu_mobile.active{
        right: 0;
        top: 38px;
    }

    div.menu_mobile > nav{
        width: 100%;
    }

    div.menu_mobile > nav > ul{
        display: flex;
        flex-direction: column;
        min-width: 100%;
    }

    div.menu_mobile > nav > ul > li{
        width: 100%;
        margin-left: 0;
        text-align: center;
        margin-bottom: 5px;
        font-size: 1.4em;
        padding: 10px;
    }

    div.menu_mobile > nav > ul > li > span, div.menu_mobile > nav > ul > li a{
        transition: all .25s;
        display: block;
        max-width: 100%;
    }

    div.menu_mobile div{
        margin-top: 30px;
        font-size: 2em;
    }
    
    @media (max-width: 768px) {
        div.menu_mobile{
        right: -65vw;
        min-width: 60vw;
        padding: 25px;
    }
    }

    @media (max-width: 460px) {
        div.menu_mobile{
        right: -85vw;
        min-width: 80vw;
        padding: 20px;
    }
    }

`
