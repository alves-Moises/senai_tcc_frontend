import { Container } from "./style";

export function HowItWorks(){
    return(
        <Container>
            <h1 
                className="title"
            >
                My Quizz
            </h1>

            <div className="row">

                <div className="l-side">

                    <h2
                        className="subtitle"
                        >
                        How It works
                    </h2>
                    <p>
                        This is a quizz from a external APi and you can select 
                        some pararamms to make your own quizz.
                    </p>
                    <p>
                        You can select dificult, number of questions, themes, etc
                    </p>

                    <p id="APIreference">
                        <strong>
                        API reference:
                            <a 
                                href="https://opentdb.com/"
                                target="_blank"
                            >
                                Open Trivia DB
                            </a>
                        </strong>
                    </p>
                </div>

                <div className="r-side">
                    <a 
                        href="https://opentdb.com/"
                        target="_blank"
                    >

                        <img 
                            src="https://opentdb.com/images/logo.png" 
                            alt="trivia" 
                            width="300px"
                        />
                    </a>
                </div>
            </div>

        </Container>

        
    )
}
