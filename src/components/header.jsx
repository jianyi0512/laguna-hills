import Image from 'next/image'
import Link  from 'next/link'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return(
        // <header className="container-fluid bg-white sticky-top bg-white mb-5">
    <>
        <Container fluid variant="light" className="shadow">
            <Navbar collapseOnSelect expand="lg">
                <Container xs={11}>
                <Container >
                    <Link href='/'><Navbar.Brand href="/">
                        <Image src="/LagunaHills_216x26.svg" className="d-flex align-items-center" width={300} height={90} quality={90} />
                    </Navbar.Brand></Link>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            {/* <Link href="/">HOME</Link>
                            <Link href="/products">輸入製品</Link>
                            <Link eventKey="disabled" disabled href="/develop">自社製品</Link>
                            <Link href="/aboutus">会社案内</Link>
                            <Link href="/contact">問合せ</Link> */}

                            <Link href='/'><Nav.Link href="/">HOME</Nav.Link></Link>
                            <Link href='/products'><Nav.Link href='products'>輸入製品</Nav.Link></Link>
                            <Nav.Link eventKey="disabled" disabled href="/develop">自社製品</Nav.Link>
                            <Link href='/aboutus'><Nav.Link href="/aboutus">会社案内</Nav.Link></Link>
                            <Link href='/contact'><Nav.Link href="/contact">問合せ</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Container>
            </Navbar >
        </Container>
     </>
    )
}

export default Header

