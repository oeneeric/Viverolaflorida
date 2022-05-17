import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from './firebaseConfig';


const Cart = () => {
    const test = useContext(CartContext);
    
    const createOrder = () => {
        let order = {
            buyer: {
                name: "Juan Pedro",
                email: "juanpedro@hotmail.com",
                phone: "3415467812",
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.priceItem,
                qty: item.qtyItem
            })),
            total: test.calcTotal()
        }
        console.log(order);

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });
    

        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(result => alert('Su orden ha sido creada. Por favor tome nota del ID de su orden.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
        test.clear();

    }


    return(
        <>
        <h2>CARRITO</h2>
        <Link to='/'><button>Volver al Shop</button></Link>
        {
        (test.cartList.length > 0) 
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
                <button onClick={createOrder}>Proceder con la compra</button>
                </>
            }
        </div>
        </>
    )

}

export default Cart;