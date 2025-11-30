import { 
    Col, 
    Container, 
    Row 

} from "./style"

import {
    GithubLogo, 
    LinkedinLogo, 
    WhatsappLogoIcon
} from "@phosphor-icons/react"

export function Footer(){
    return(
        <Container>
            <Row>
                <Col>
                    © 2025 Alves Informática, all rights reserved.
                </Col>
                <Col>
                    <a 
                        href="https://wa.me/5522999668509?text=Ola,+gostei+do+seu+site!" 
                        target="_blank" 
                    >
                        <WhatsappLogoIcon 
                            size={32} 
                            className="icon iconWPP"
                        />
                    </a>
                    <a 
                        href="https://www.github.com/alves-Moises"
                        target="_blank"
                    >
                        <GithubLogo 
                            size={32} 
                            className="icon iconGHB"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/alves-Moises"
                        target="_blank"
                    >
                        <LinkedinLogo 
                            size={32} 
                            className="icon iconLKDN"
                        />
                    </a>

                </Col>
            </Row>
        </Container>
    )
}
