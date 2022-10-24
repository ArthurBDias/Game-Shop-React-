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