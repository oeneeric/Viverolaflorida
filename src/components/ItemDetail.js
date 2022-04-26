import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import Checkout from './Checkout';
import { Card, } from 'react-bootstrap';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
        setItemCount(qty);
        test.addItem(item);
    }

    return (
        <>
        {
        item && item.image
        ?
        <Card className="tamaño_img">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <Checkout />
            }
        </Card>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail;