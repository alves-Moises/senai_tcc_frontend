import { 
    useEffect, 
    useState 
} from "react"

import { 
    Container, 
    ListContainer 
} from "./style"

import { 
    Pencil, 
    Trash 
} from "@phosphor-icons/react"

export const RecordContainer = () => {
    const [recordList, setRecordList] = useState([])
    const [loading, setLoading] = useState(true)
    const URLBase = "http://localhost:3000/records"


    useEffect(() => {
        const fetchAPI = async() => {
            // const URLBase = "http://localhost:3000/records"
            try{
                const data = await fetch(URLBase).then(res => res.json())

                if(!data){
                    alert("No results")
                    throw new Error("No results")
                }
                var scoreList = data.map(
                        (
                            {name, score, id}
                            , index
                        ) => {
                            return(
                                {
                            name: name,
                            score: score,
                            id: id
                            }
                        )
                    }
                )

                
                let changed = true
                while(changed){
                    changed = false
                    for(
                        let i = 0;
                        i < scoreList.length - 1;
                        i++
                    ){
                        if(scoreList[i].score < scoreList[i+1].score){
                            let temp = scoreList[i].score
                            scoreList[i].score = scoreList[i+1].score
                            scoreList[i+1].score = temp
                            changed = true
                        }
                    }
                }
                setRecordList(scoreList)

            }catch(err){
                console.error(`ERROR: ${err}`)

            }finally{
                setLoading(false)
            }
        }

        fetchAPI()
    },[loading])

    const removeScore = async (event, id, name) => {
        event.preventDefault()
        if(!confirm(`Remove ${name}?`)){
            return
        }
        try{

            await fetch(`${URLBase}/${id}`,
                {
                method: "DELETE",
                headers:{
                    "Content-type": "Application/json"
                },
                }
            ).then(
                res => {
                    if(!res.ok){
                        throw new error(res.status)
                    }
                }
            )
            
        }catch(err){
            console.error(`Error: ${err}`)
        }finally{
            alert("Deleted successful!")
            setLoading(true)
        }
    }

    const editName = async(event, id, name) => {
        event.preventDefault()
        const newName = prompt(`New name: (Actual: ${name})`)

        try{
            await fetch(
                `${URLBase}/${id}`,
                {
                    method: "PATCH",
                    headers:{
                        "Content-type": "Application/json"
                    },
                    body: JSON.stringify(
                        {
                            name: newName
                        }
                    )
                }
            ).then(res => {
                if(!res.ok){
                    throw new Error(res.res)
                }
            })

        }catch(err){
            console.error(`ERROR: ${err}`)
            alert(err)
            return
            
        }finally{
            alert("Success!")
            setLoading(true)
        }
        
    }
    if(loading){
        return(
            <>
                <Container>
                    Loading...
                </Container>
            </>
        )
    }
    return(
        <>
            <Container className="main">
                <h1>Record List</h1>

                <ListContainer>

                    <div className="cardScore titleScore">
                        <p className="cellTitle posCol">#</p>
                        <div className="cellTitle nameCol">
                            <p className="nameP">
                                Name
                            </p>
                        </div>
                        <div className="rightSide">

                            <p className="cellTitle scoreCol">Score</p>
                            <p className="cellTitle editCol"></p>
                        </div>
                    </div>
                    { 
                        recordList.map(

                            (
                                {
                                    name, 
                                    score, 
                                    id
                                }, 
                                index
                            ) => {

                                return(
                                    
                                    <div 
                                        key={index}
                                        className="cardScore"
                                    >
                                        <p 
                                            
                                            className="cell posCol"
                                        >
                                            {index+1}
                                        </p>
                                        <div
                                            
                                            className="cell nameCol"
                                        >
                                            <p className="nameP">
                                                {name}
                                            </p>
                                        </div>


                                        <div className="rightSide">

                                            <p 
                                                
                                                className="cell scoreCol"
                                            >
                                                {score}
                                            </p>

                                            <p 
                                                className="cell editCol"
                                            >
                                                
                                                <button
                                                    className="editBTN"
                                                    onClick={
                                                        (event)=>{
                                                            editName(
                                                                event,
                                                                id,
                                                                name
                                                            )
                                                        }
                                                }
                                                >
                                                    <Pencil 
                                                        className="editIcon"
                                                        size={16} 
                                                    />
                                                </button>    

                                                <button
                                                    className="removeBTN"
                                                    onClick={
                                                        (event) => {
                                                            removeScore(
                                                                event,
                                                                id,
                                                                name
                                                            )
                                                        }
                                                    }
                                                >
                                                    <Trash 
                                                        className="delIcon"
                                                        size={16} 
                                                    />
                                                </button>
                                            </p>
                                        </div>

                                    </div>
                                )
                            }
                        )
                    }
                </ListContainer>
            </Container>
        </>
    )
}