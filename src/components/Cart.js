import { CartContext } from './CartContext';
import { useContext } from 'react';

const Cart = () =>{
    const test = useContext(CartContext);
    console.log(test.cartList)
    
    return(
        <>
        <h2>CARRITO</h2>
        <button onClick={test.clear}>Vaciar carrito</button>
        {
            test.cartList.length > 0 && (
                <>
                    {
                        test.cartList.map(item =>
                            <div key={item.idItem} className="carrito_formato"> 
                                <img class="carrito_img" src={item.imgItem} />
                                <h3>Producto: {item.nameItem}</h3>
                                <p>{item.qtyItem} items</p>
                                <p>$ {item.priceItem}</p>
                                <button onClick={() => test.removeItem(item.idItem)}>Eliminar producto</button>
                            </div>
                        )
                    }
                </>
                
            )
        }
        </>
    )

}

export default Cart;