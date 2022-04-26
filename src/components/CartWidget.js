import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <>
            <Link to='/Cart'><button className="boton_carrito"><FontAwesomeIcon icon={faCartShopping}/><span className="numero_carrito">4</span></button></Link>
        </>
    )
}

export default CartWidget;