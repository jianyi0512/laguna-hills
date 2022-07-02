import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return(
        // <header className="container-fluid bg-white sticky-top bg-white mb-5">
    <>
        <Container fluid variant="light" className="shadow">
           
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Col>
                        <Navbar.Brand href="/">
                            <Image src="/LagunaHills_216x26.svg" className="d-flex align-items-center" width={300} height={90} quality={90} />
                        </Navbar.Brand>
                        </Col>
                        <Col />
                        <Col>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">HOME</Nav.Link>
                                <Nav.Link href="/products">輸入製品</Nav.Link>
                                <Nav.Link eventKey="disabled" disabled href="/develop">自社製品・開発</Nav.Link>
                                <Nav.Link href="/aboutus">会社案内</Nav.Link>
                                <Nav.Link href="/contact">問合せ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Col>
                    </Container>
                </Navbar >
            
        </Container>
     </>
    )
}

export default Header

