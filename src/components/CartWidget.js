import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <>
            <button className="boton_carrito"><FontAwesomeIcon icon={faCartShopping}/></button>
        </>
    )
}

export default CartWidget;