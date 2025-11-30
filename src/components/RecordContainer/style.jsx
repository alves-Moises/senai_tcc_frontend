import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #89b1dc;
    padding: 50px 0;
    gap: 40px;

`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    background-color: #6f85a2;


    .cardScore{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dfdfdf;
        padding: 0px 0px 0  20px;
    }

    .rightSide{
        display: flex;
        flex-direction: row;
        /* gap: 10px; */
        align-items: center;
    }

    .titleScore{
        font-weight: 800;
        background-color: #485a77;
    }
    .cellTitle{
        padding: 10px 0;
    }

    .cell{
        padding: 6px 0;
    }

    .nameCol{
        display: flex;
        width: max-content;
    }

    .posCol{
        padding-right: 6px;
        border-right: 1px solid #dfdfdf;
    }
    
    .scoreCol{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 30px;
    }

    .editCol{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 70px;

        button{
            border: none;
            background: none;
        }

        .editIcon{
            color: #209a57;
        }

        .editIcon:hover{
            color: #066531;
            cursor: pointer;
            transition-duration: 0.5s;
        }

        .delIcon{
            color: #7d1919;
        }

        .delIcon:hover{
            color: #640707;
            cursor: pointer;
            transition-duration: 0.5s;
        }

    }
`