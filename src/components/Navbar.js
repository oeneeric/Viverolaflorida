import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Vivero la Florida</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Zonas de Entrega</Nav.Link>
            <Nav.Link href="#pricing">¿Quiénes Somos?</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;