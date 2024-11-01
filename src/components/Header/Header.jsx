import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ГРЫЗУНЫ</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главное</Nav.Link>
                        <Nav.Link href="#catalog">Каталог</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
