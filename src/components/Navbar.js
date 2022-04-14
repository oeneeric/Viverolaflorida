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
                    <Link to="/category/1"><Nav.Link>Aromáticas</Nav.Link></Link>
                    <Link to="/category/2"><Nav.Link>Categoría 2</Nav.Link></Link>
                    <Link to="/category/3"><Nav.Link>Categoría 3</Nav.Link></Link>
                    <Link to="/category/4"><Nav.Link>Categoría 4</Nav.Link></Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;