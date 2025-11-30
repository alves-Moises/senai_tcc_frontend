import { 
    useEffect, 
    useState 
} from "react"
import { Container } from "./style"
import { HourglassMediumIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [catList, setCatList] = useState(null);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAPI(){
            const URLBase = "https://opentdb.com/"
            
            try{
                const res = await fetch(
                    `${URLBase}/api_category.php`
                )
                if(!res.ok){
                    throw new Error(`Error... ${res.status}`)
                }
                const data = await res.json()
                setCatList(data["trivia_categories"])
                
            }catch(err){
                console.error(err)
            }finally{
                setLoading(false)
            }
        }
        
        fetchAPI()
    }, [])
    

    //TODO: fix eventListener

            
    function sendForm(event, navigate){
        event.preventDefault()
        const formData = {
            amount: document.getElementById("qtd").value,            
            category: document.getElementById("selectCat").value,            
            difficulty:document.getElementById("selectDifficulty").value,            
            type: document.getElementById("selectType").value
        }

        const newData = {}
        Object.keys(formData).forEach(
            key => {
                if(formData[key] !== "random"){
                    newData[key] = formData[key]
                }
            }
        )
        
        // console.log(newData)
        // alert(`${newData}`)
        navigate("/quizz", {state: newData})

    }


    if(loading){return (
            <Container>
                <h1 id="Load">
                    <HourglassMediumIcon size={32} />
                    Loading...
                </h1>
            </Container>
        )
    }


    

    
    return (
        <>
            <Container className="main">
                <h1>Rules for your Quizz</h1>

                <form action={sendForm}>
                    <div
                        className="qtdField field"
                    >

                        <label htmlFor="qtd">
                            Quantity
                        </label>
                        <input 
                            name="qtd"
                            type="number" 
                            placeholder="quantity"
                            defaultValue="10"
                            min="1"
                            max="50"
                            id="qtd"
                            className="optInput"
                        />
                    </div>

                    <div 
                        className="catField field"
                    >
                        <label htmlFor="selectCat">
                            Category
                        </label>
                        <select 
                            name="cat" 
                            id="selectCat"
                            className="optInput"
                        >   
                            <option
                                value="random"
                                className="optCat"
                            >
                                Random
                            </option>
                            {
                                catList.map(cat => 
                                    // console.log(cat)
                                    (
                                        <option 
                                            key={cat.id}
                                            value={cat.id}
                                            className="optCat"
                                        >
                                            {cat.name}
                                        </option>
                                    )
                                )
                            }
                        </select>
                    </div>

                    <div className="difField field">
                        <label htmlFor="selectDifficulty">
                            Difficulty
                        </label>
                        <select
                            name="difficulty"
                            id="selectDifficulty"
                            className="optInput"
                        >
                            <option
                                value="random"
                                className="optCat"
                            >
                                Random
                            </option>

                            <option
                                value="easy"
                            >
                                Easy
                            </option>

                            <option
                                value="medium"
                            >
                                Medium
                            </option>

                            <option
                                value="hard"
                            >
                                Hard
                            </option>
                        </select>
                    </div>

                    <div className="typeField field">
                        <label 
                            htmlFor="selectType"
                        >
                            Type
                        </label>
                        <select
                            name="type"
                            id="selectType"
                            className="optInput"
                        >
                            <option
                                value="random"
                                className="optCat"
                            >
                                Random
                            </option>

                            <option 
                                value="boolean"
                            >
                                True/False
                            </option>

                            <option 
                                value="multiple"
                            >
                                Multiple Choice
                            </option>

                        </select>
                    </div>

                    <button
                        id="sendForm" 
                        onClick={(event) => {sendForm(event, navigate)}}
                    >
                        SEND
                    </button>
                    
                </form>

                
                    
                
            </Container>

       
        </>
    )
}