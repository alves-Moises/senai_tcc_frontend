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

            try{

                const res = await fetch(
                    `${baseURL}?${queryParams}`
                )

                if(!res.ok){
                    throw new Error(`HTTP Error: ${res.status}`)

                }
                console.log(res.status)
                let data = await res.json()
                setQuestList(data.results)

                // if(res.status == 429){
                //     console.log("To manny Requests. Waiting 6 sec...")
                //      alert("to many quests")
                //     return setTimeout(
                //             fetchAPI, 6000
                //         )
                // }
            
                
            }catch(err){
                console.error(err)
            }finally{

            setLoading(false)

            }
        }

        fetchAPI()
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
                                "answer": correct_answer,
                                "correct": "true"
                            })

                            incorrect_answers.forEach(answer => {
                                answerList.push({
                                    "answer": answer,
                                    "correct": "false"
                                })
                            })

                            console.log(incorrect_answers)

                            let randomList = []
                            let len = answerList.length
                            for(
                                let i = 0; 
                                i <  len; 
                                i++
                            ){
                                randomList.push(
                                    answerList.splice(
                                        Math.floor(
                                            Math.random()*(
                                                answerList.length -1
                                            )
                                        ),
                                        1
                                    )
                                )
                            }

                            // console.log(answerList)
                            return(
                                
                                <Card key={index}>


                                    <div className="half-size">

                                        

                                        <div className="l-side">
                                            <h3>
                                                {decodeHtmlEntities(question)}
                                            </h3>
                                            <select class={index}>

                                                {
                                                    randomList.map((item, index) => {
                                                        let answer = item[0].answer
                                                        let correct = item[0].correct

                                                        return(
                                                            <div 
                                                                key={index}
                                                                class="cardOptions"
                                                            >
                                                                <option
                                                                    name={index}
                                                                    class={correct}    
                                                                >
                                                                    {answer}
                                                                </option>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </select>
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
                    <input type="text" name="Name" id="name" placeholder="name..."/>                        
                </form>

            </Container>


            <Footer />
        </>
    )
}