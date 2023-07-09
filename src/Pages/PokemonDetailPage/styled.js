import styled from "styled-components"

export const PokeInfosContainer = styled.main `
    height: 80vh;
    margin: 20px 10vw;
    display: flex;
    justify-content: space-evenly;
`

export const ImagesContainer = styled.div`
    align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgWrapper = styled.img`
    height: 25vh;
    background: #f1f1f1;
`

export const StatsContainer = styled.div `
    background: #f1f1f1;
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

export const TitleContainer = styled.h2`
    align-self: center;
`

export const TypeAndMovesContainer = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TypesContainer = styled.div`
    background: #f1f1f1;
    height: 10%;
    display: flex;
    justify-content: space-around;
`;

export const MovesContainer = styled.div`
    background: #f1f1f1;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        background-color: #ECECEC;
        max-width: 40%;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        padding-left: 10px;
    }
`;

export const TypeImg = styled.img`
    width: 91px;
    height: 35px;
    margin: 3px
`;

export const PokeImg = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -50px;
    right: 0px;
`;

export const PokeballImg = styled.img`
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 0;
`;

export const ProgressContainer = styled.div`
    height: 75%;
    section{
        display: grid;
        grid-template-columns: 2fr 1fr 3fr;
    }
`;

export const DivProgress = styled.div`
    width: 100%;
    height: 10px;
`;

export const ProgressBar = styled.div`
    height: 10px;
    background-color: #FF7C2E;
    width: ${(props) => props.widthBar}%;
    display: flex;
    border-radius: 8px;
`;

export const PStatsName = styled.p`
    display: flex;
    justify-content: end;
`;

export const PStatsNumber = styled.p`
    display: flex;
    justify-content: center;
`;