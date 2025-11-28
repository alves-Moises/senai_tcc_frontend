import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding:  60px 0;
    
    #Load{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        text-align: center;
    }

    h1{
        padding: 50px;
    }

    form{
        color: #fff5fa;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 10px;
        border-radius: 4px;

        background-color: #8a9cba;

    }

    .field{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        align-items: stretch;
        gap: 50px;
        border: 1px dotted #dfdfdf;
        label{
            padding: 5px;
        }
        select{

            text-align: right;
        }
        .optInput{
            width: 300px;
            text-align: right;
            padding-right: 3px;
        }

        
    }

    #sendForm{

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #800066;
        padding: 8px 10px;
        margin-top: 15px;
        width: 30%;
        margin-right: auto;
        margin-left: auto;
        transition-duration: 0.5s;

    }

    #sendForm:hover{
        background-color: #ff00cc;
        transition-duration: 0.5s;

    }

`

