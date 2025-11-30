import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useLocation } from "react-router-dom"
import { Card, Container, Form, LoadingContainer } from "./style"

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

    const saveScore = async(user, score) =>{
        const URLBase = "http://localhost:3000/records"
        const userData = {
            name: user,
            score: score
        }

        try{
            res = await fetch(URLBase, {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(
                res => {
                    res.json()
                }
            )
        }catch(err){
            console.error(`ERROR: ${err}`)
        }finally{
            console.log(res.status)
        }
        

    }

    const formSubmit = (event) => {
        event.preventDefault()
        
        const userName = document.getElementById("name").value
        if(!userName){
            alert("digite o nome de usuário")
            return
        }

        (document.querySelectorAll(".answSelect")).forEach(element => {
            element.disabled = true
        })

        document.getElementById("name").disabled = true
        document.getElementById("submitBTN").disabled = true


        document.getElementsByClassName("recordField")[0].style.visibility = "visible"
        const correct = document.querySelectorAll("*:checked.true")
        const incorrect = document.querySelectorAll("*:checked.false")

        const totalQuestions = correct.length + incorrect.length
        console.log(totalQuestions)
        console.log(correct.length)
        const score = (correct.length / totalQuestions) * 100

        correct.forEach(item => {
            console.log(item)
            item.parentElement.style =` 
                background-color: #3da522;
                color: #fff;
                font-weight: bold;
                `
        })

        incorrect.forEach(item => {
            console.log(item)
            item.parentElement.style = `
                background-color: #922257;
                color: #fff;
                font-weight: bold;
            `
        })

        saveScore(userName, score)
    }

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

    
    if(loading){
        return(
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

                <Form action="">

                    {
                        questList.map(
                            (
                                {
                                    type,
                                    difficulty,
                                    category,
                                    question,
                                    correct_answer,
                                    incorrect_answers
                                }, index
                            ) => {
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
                                                <h3 className="QTitle">
                                                    {decodeHtmlEntities(question)}
                                                </h3>
                                                <select 
                                                    className={`Q${index} answSelect`}
                                                    name={`Q${index}`}
                                                >

                                                    {
                                                        randomList.map((item, index) => {
                                                            let answer = item[0].answer
                                                            let correct = item[0].correct

                                                            return(
                                                                <option
                                                                    key={index}
                                                                    name={index}
                                                                    className={`${correct} opt`}    
                                                                >
                                                                    {decodeHtmlEntities(answer)}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className="r-side">


                                                <p>
                                                    Category: 
                                                    {decodeHtmlEntities(category)}
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
                        )
                    }

                    <div className="formFooter">
                        <div className="Player">

                            <p>Name:</p>
                            <input 
                                type="text" 
                                name="Name"
                                id="name" 
                                placeholder="name..."
                                required
                            />                        
                        </div>

                        <div className="SubmitField">
                            <button 
                                id="submitBTN"
                                onClick={
                                    (event) => {
                                        formSubmit(event)
                                    }
                                }
                            >
                                <strong>
                                    SEND
                                </strong>
                            </button>
                        </div>

                    </div>

                    <div 
                        className="recordField"
                    >
                        <a 
                            href="/records" 
                            id="records"
                        >
                            Records
                        </a>
                    </div>
                </Form>

            </Container>

            <Footer />
        </>
    )
}