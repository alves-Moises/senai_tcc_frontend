import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 30px;
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
    background-color: #345995;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #345995;
    margin-bottom: 35px;


    .recordField{
        display: flex;
        visibility: hidden;
        align-items: center;
        justify-content: center;
        margin:   10px 0;
        transition-duration: 1s;
        
        a{
            border-radius: 8px;
            border: 1px solid #cad;
            background-color: #cc2718;

            color: #fff;
            padding: 10px 50px;
            transition-duration: 0.5s ;

        }
        
        a:hover{
            background-color: #fb4d3d;
            color: #dfdfdf;
            transition-duration: 0.5s ;
            padding: 10px 55px;
        }
    }

    .formFooter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fdfdfd;

        .Player{
            display: flex;
            flex-direction: row;
            gap:30px;
            padding: 30px;
            align-content: center;
            align-items: center;
        }
        input{
            padding: 6px;
            border-radius: 4px;
        }

        .SubmitField{
            display: flex;
            flex-direction: column;
            padding: 10px 50px;
            button{
                border-radius: 8px;
                padding: 10px 30px;
                background-color: #dfdfdf;
                transition-duration: 0.5s;

            }
            button:hover{
                cursor: pointer;
                background-color: #d37f7f;
                transition-duration: 0.5s;
                border: 1px solid #dfdfdf;
            }
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 6px;
    /* border: #f0c 1px solid; */
    padding: 10px;

    
    .half-size{
        display: flex;
        flex-direction: row;
        width: 100%;
        border: 1px solid #dfdfdf;
    }

    .l-side{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
        padding-bottom: 30px;
        width: 70%;

        background-color: #31314b;
        color: #fdfdfd;

        .QTitle{
            text-align: center;
            margin:  30px 10px ;
            /* width: 50%; */
            /* background-color: gray; */
        }

        .true{
            color: green;
        }
        .false{
            color: red;
        }
        .answSelect{
            color: #121e81;
            padding: 5px 10px;
            min-width: 40%;
            text-align: center;
        }
    }

    .r-side{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding: 16px;
        gap: 8px;
        width: 30%;
        background-color: #dadadf;
    }


`
