import { 
    useEffect, 
    useState 
} from "react"
import { Container } from "./style"
import { HourglassMediumIcon } from "@phosphor-icons/react";

export const Form = () => {
    const [catList, setCatList] = useState(null);
    const [loading, setLoading] = useState(true)
    
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
    // document.getElementById("sendForm").addEventListener("click", () => {
    //     const quantity = document.getElementById("qtd").value
    //     const cat = document.getElementById("selectCat").value
    //     const difficulty = document.getElementById("selectDifficulty").value
    //     const type = document.getElementById("selectType").value    
    // })

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

                <form >
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

                    
                    <a id="sendForm">
                        SEND
                    </a>
                </form>
                
                    
                
            </Container>

       
        </>
    )
}