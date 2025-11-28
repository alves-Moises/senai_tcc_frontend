import styled from "styled-components";

export const  Container = styled.footer`
    display: flex;
    flex-direction: collum;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: #000;
    color: #dfdfdf;
    padding: 10px;

    .icon{
        color: #8a9cba;
        transition-delay: 0.5s;
    }
    .icon:hover{
        color: #ba8aa6;
        transition-duration: 0.5s;
    }
`

export const Row = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
`

export const Col = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* height: 100%; */
    align-items: center;
    gap: 20px;

        
`
