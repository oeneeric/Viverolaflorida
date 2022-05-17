import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);
    
    return(
        <>
        <h2>CARRITO</h2>
        <Link to='/'><button>Seguir comprando</button></Link>
        {
        (test.cartList.lengt > 0) 
        ? <button onClick={test.clear}>Vaciar carrito</button>
        : <p>Tu carrito está vacío!</p>
        }
        {
            test.cartList.length > 0 && (
                <>
                    {
                        test.cartList.map(item =>
                            <div key={item.idItem} className="carrito_formato"> 
                                <img class="carrito_img" src={item.imgItem} />
                                <h3>Producto: {item.nameItem}</h3>
                                <p>{item.qtyItem} items</p>
                                <p>$ {test.calcTotalPerItem(item.idItem)}</p>
                                <button onClick={() => test.removeItem(item.idItem)}>Eliminar producto</button>
                            </div>
                        )
                    }
                </>
            )
        }
        <div>
            {
                test.cartList.length > 0 &&
                <>
                <h3>Resumen</h3>
                <h5>Subtotal</h5>
                <p>${test.calcSubTotal()}</p>
                <hr />
                <h4>Total</h4>
                <p>${test.calcTotal()}</p>
                <button>Finalizar compra</button>
                </>
            }
        </div>
        </>
    )

}

export default Cart;