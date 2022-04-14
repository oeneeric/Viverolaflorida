import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, description, image }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="card_description">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>$ {price}</Card.Text>
                    <Link to={`/item/${id}`}><Button variant="primary">Ver producto</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;