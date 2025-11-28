import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #88fdd6;
    padding: 30px;
    border-top: 1px black solid;

    .gameMode{
        padding: 20px;
        width: 100%;
        #sub{
            text-align: center;
            margin-bottom: 30px;
        }
        .divided{
            
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 30 0px;
            /* align-items: center; */
            width: 100%;
            gap: 20px;

            
            .half-size{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: #ff67e1;
                border: 1px solid white;
                /* width: 50%; */
                padding: 30px 50px 20px 50px;
                border-radius: 4px;


                h3{
                    padding: 8px;
                }

                #subGameRandom{
                    display: flex;
                    gap: 10px;
                }

                #subGameRules{
                    display: flex;
                    gap: 10px
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                    margin-bottom: 20px;
                    gap: 8px;
                }

                .gameLink{
                    margin: 10px;
                    background-color: #ff84e6;
                    margin: 15px;
                    padding: 10px;
                    text-align: center;
                    transition-duration: 0.2s;
                    border: solid 1px white;
                }

                .gameLink:hover{
                    transition-duration: 0.2s;
                }

                #Rgame{
                    color: #dfdfdf;
                    background-color: #fb4d3d;
                }

                #Rgame:hover{
                    background-color: #9c1003;
                }

                #Pgame{
                    color: #dfdfdf;
                    background-color: #1b50a5;
                }

                #Pgame:hover{
                    background-color: #02245a;
                }
            }
        }
    }

`