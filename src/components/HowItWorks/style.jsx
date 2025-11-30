import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 20px;
    /* background-color: #f0c; */
    /* justify-content: center; */

    .title{
        width: 100%;
        text-align: center;
    }
    
    .row{
        display: flex;
        width: 80%;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px;
        margin: 10px;

        .subtitle{
            width: 100%;
            margin-bottom: 8px;

        }
        
        p{
            width: 300px;
            text-align: justify;
        }
        
        .r-side{
            img{
                background-color: #222;
                padding: 10px;
                border-radius: 4px;
            }
        }
    }

    #APIreference{
        margin: 10px;
        text-align: center;

        a{
            color: #800066;
        }
        a:visited{
            color: 400033;
        }
    }

`