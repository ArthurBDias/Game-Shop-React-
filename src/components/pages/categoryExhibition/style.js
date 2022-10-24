import styled from "styled-components";

export const CategoryExhibition = styled.div`
    padding: 8vh 0 0 30px;

    div.line{
        height: 3px;
        background-color: ${props => props.theme.primary};
        border-radius: 4px;
        width: calc(100% - 30px);
        margin-bottom: 40px;
    }

    h2{
        text-align: center;
        transform: translateY(6vh);
    }
`