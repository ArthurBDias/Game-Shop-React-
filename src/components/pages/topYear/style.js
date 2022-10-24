import styled from "styled-components";

export const TopYearContainer = styled.div`
    padding: 8vh 0 0 30px;
    max-width: 70%;
    margin: auto;


    div.title_container h1{
        margin-bottom: 20px;
    }

    div.line{
        height: 3px;
        background-color: ${props => props.theme.primary};
        border-radius: 4px;
        width: calc(100% - 30px);
        margin-bottom: 40px;
    }
`