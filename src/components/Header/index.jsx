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
                <a 
                    className={`${pageName == "/"?"active" : "disabled"}`}
                    href="/"
                >
                    Home
                </a>
                <a 
                    className={`${pageName == "/quizz"?"active" : "disabled"}`}
                    href="/quizz"
                >
                    Quizz
                </a>
                <a
                    className={`${pageName == "/records"?"active" : "disabled"}`}
                    href="/records"
                >
                        Records
                </a>
            </navbar>
        </Container>
    )
}