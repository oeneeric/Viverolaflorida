import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light barra_nav">
            <a className="navbar-brand" href="#">Pañalera JyP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Zonas de entrega</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">¿Quiénes somos?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default Navbar;