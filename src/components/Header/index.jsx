import { Container } from "./style"
import Logo from "../../assets/img/logo/Logo.png"

export function Header(){
    return(
        <Container>
            <a href="/">
                <img
                    src={Logo}
                    alt="logo" 
                />
            </a>
            <navbar>
                <a href="/">Home</a>
                <a href="/quizz">Quizz</a>
                <a href="/records">Records</a>
            </navbar>
        </Container>
    )
}