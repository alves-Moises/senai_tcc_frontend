import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useLocation } from "react-router-dom"
import { Card, Container, LoadingContainer } from "./style"

export function Quizz() {
    const [loading, setLoading] = useState(true)
    const [questList, setQuestList] = useState([])
    
    const location = useLocation()
    const {state} = location

    useEffect(()=>{
        const fetchAPI = async() =>{
            const baseURL = "https://opentdb.com/api.php"

            const queryParams = (
                new URLSearchParams(
                    state ? state : {
                        amount: 10  
                    }
                )
            ).toString()

            const res = await fetch(
                `${baseURL}?${queryParams}`
            )

            console.log(res.status)
            if(res.status == 429){
                console.log("To manny Requests. Waiting 6 sec...")
                // alert("to many quests")
                return setTimeout(
                        fetchAPI, 6000
                    )
                
            }
            
            let data = await res.json()
            setQuestList(data.results)
        }



        fetchAPI()

        setLoading(false)
    }, [])


    // html treatmment char
    const decodeHtmlEntities = (text) => {
        const parser = new DOMParser();
        const decodedString = parser
            .parseFromString(
                text, 
                'text/html'
            )
            .body
            .textContent;

        return decodedString;
    };
    // const [seachParams, setSearchParams] = useSearchParams
    
    if(loading){return(
            <>

                <Header />
                <LoadingContainer>
                    Loading...
                </LoadingContainer>
                <Footer />
            </>
        )
    }

    

    return(
        <>
            <Header />

            <Container>

                <h1>quizz</h1>

                <form action="">

                    {questList.map(
                        ({
                            type,
                            difficulty,
                            category,
                            question,
                            correct_answer,
                            incorrect_answers
                        }, index) => {
                            let answerList = []

                            answerList.push({
                                "question": correct_answer,
                                "correct": "true"
                            })

                            incorrect_answers.forEach(answer => {
                                answerList.push({
                                    "question": answer,
                                    "correct": "false"
                                })
                            })
                            // console.log(answerList)
                            return(
                                
                                <Card key={index}>


                                    <div className="half-size">

                                        

                                        <div className="l-side">
                                            <h3>
                                                {decodeHtmlEntities(question)}
                                            </h3>
                                            <span>
                                                
                                            {answerList.map(answer => (
                                                <p>{answer}</p>
                                            ))}
                                            </span>
                                        </div>

                                        <div className="r-side">


                                            <p>
                                                Category: 
                                                {category}
                                            </p>

                                            <p>
                                                Type:
                                                {type}
                                            </p>

                                            <p>
                                                Difficulty:
                                                {difficulty}
                                            </p>
                                        </div>
                                    </div>



                                </Card>


                            )
                        }
                    )}
                </form>

            </Container>


            <Footer />
        </>
    )
}