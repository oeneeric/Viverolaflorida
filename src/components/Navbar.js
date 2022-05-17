import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Link to="/"><Navbar.Brand>Vivero la Florida</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Nav.Link href="/category/Aromáticas">Aromáticas</Nav.Link>
                    <Nav.Link href="/category/Sustratos">Sustratos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;