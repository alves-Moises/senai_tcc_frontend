import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #800066;
    padding: 20px;

    navbar{
        display: flex;
        gap: 20px;

        a{
            background-color: #345995;
            color: #dfdfdf;
            padding: 8px 14px;
            border-radius: 4px;
            }
        a:hover{
            background-color: #fb4d3d;
            color: #fff;
        }
    }
`

