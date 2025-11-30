import { Container } from "./style"
import { useLocation } from "react-router-dom"
import Logo from "../../assets/img/logo/Logo.png"

export function Header(){
    const location  = useLocation()
    const pageName = location.pathname

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