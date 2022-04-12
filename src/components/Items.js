import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Items = ({ name, price, description, image }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="card_description">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>$ {price}</Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Items;