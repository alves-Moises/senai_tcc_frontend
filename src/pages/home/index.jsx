import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { HowItWorks } from "../../components/HowItWorks"
import { LetsQuizz } from "../../components/LetsQuizz"

import { MainContainer } from "./style"

export function Home(){
    return(
        < >
            <Header />

            <MainContainer class="main">

                <HowItWorks />
                <LetsQuizz />

            </MainContainer>
            <Footer />
        </>
    )
};
