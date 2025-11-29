import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 6px;
    border: #f0c 1px solid;
    padding: 10px;

    
    .half-size{
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #a76d9b;
    }

    .l-side{
        width: 70%;

        background-color: #fdd;

        h3{
            text-align: center;
            background-color: gray;
        }

    }

    .r-side{
        width: 30%;
        background-color: #f0c;
    }


`
