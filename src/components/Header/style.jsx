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
            color: #dfdfdf;
            padding: 8px 14px;
            border-radius: 4px;
        }
        a:hover{
            color: #fff;
            background-color: #fb4d3d;
            transition-duration: 0.5s;
        }
    }

    .active{
        background-color: #a8342a;
        transition-duration: 0.5s;
    }

    .disabled{
        background-color: #345995;
        transition-duration: 0.5s;
    }
`
