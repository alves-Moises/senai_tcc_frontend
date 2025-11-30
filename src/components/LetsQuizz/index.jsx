import { 
    Shuffle, 
    ClipboardText

} from "@phosphor-icons/react"
import { Container } from "./style"


export const LetsQuizz = () => {
    return (
        <>
            <Container>
                <h1>Lets Quizz?</h1>

                <div className="gameMode">
                    <h3
                        id="sub"
                    >
                        Select game mode:
                    </h3>
                    <div className="divided">
                        <div className="half-size">
                            <h3
                                id="subGameRandom"
                            >
                                <Shuffle 
                                    size={20}
                                />
                                Random Game
                            </h3>

                            <ul>
                                <li>10 questions by default</li>
                                <li>Random theme and dificulty</li>

                            </ul>

                            <a 
                                href="/quizz"
                                className="gameLink"
                                id="Rgame"
                            >
                                Random game
                            </a>

                        </div>
                        <div className="half-size">
                            <h3
                                id="subGameRules"

                            >
                                <ClipboardText  
                                    size={20} 
                                />

                                Select game rules
                            </h3>
                            <ul>
                                <li>Number of questions</li>
                                <li>Dificulty</li>
                                <li>Category</li>
                            </ul>

                            <a
                                href="/form"
                                className="gameLink"
                                id="Pgame"
                            >
                                Personalized game
                            </a>
                        </div>

                    </div>
                </div>
            </Container>
        </>

    )
}
