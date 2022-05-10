import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { CartContext }  from './CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const test = useContext(CartContext);

    return (
        <>
            <Link to='/Cart'><button className="boton_carrito"><FontAwesomeIcon icon={faCartShopping}/><span className="numero_carrito">{test.calcItemsQty()}</span></button></Link>
        </>
    )
}

export default CartWidget;