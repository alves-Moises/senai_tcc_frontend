import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container } from "./style"

export const Error = () => {
    return (
        <>
            <Header />
            <Container className="main">
                <h1>Not Found - 404</h1>
                <h2>Trying new ways? Nothing to see here..</h2>
                <a href="/">
                    <h2>
                        Let's Go Home!
                    </h2>
                </a>
            </Container>
            <Footer />
        </>
    )

}