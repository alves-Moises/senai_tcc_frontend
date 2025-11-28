import { Container } from "./style"

export function Header(){
    return(
        <Container>
            <a href="/">
                <img alt="logo" />
            </a>
            <navbar>
                <a href="/">Home</a>
                <a href="/quizz">Quizz</a>
                <a href="/records">Records</a>
            </navbar>
        </Container>
    )
}