import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </Card>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail;