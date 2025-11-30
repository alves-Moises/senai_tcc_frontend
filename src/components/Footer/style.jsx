import styled from "styled-components";

export const  Container = styled.footer`
    display: flex;
    flex-direction: collum;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #000;
    color: #dfdfdf;
    padding: 10px;

    .iconGHB{
        color: #8a9cba;
        transition-delay: 0.5s;
    }
    .iconGHB:hover{
        color: #ba8aa6;
        transition-duration: 0.5s;
    }

    .iconWPP{
        color: #15651f;
        transition-duration: 0.5s;

    }
    .iconWPP:hover{
        color: #277e33;
        transition-duration: 0.2s;

    }

    .iconLKDN{
        color: #0a66c2;
        transition-duration: 0.5s;

    }
    .iconLKDN:hover{
        color: #2084e7;
        transition-duration: 0.2s;

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
