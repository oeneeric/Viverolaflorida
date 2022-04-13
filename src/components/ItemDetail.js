import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const ItemDetail = ({ items }) => {
    console.log(items)
    return (
        <>
        {
        items
        ?
        <Card className="tamaño_img">
            <Card.Img variant="top" src="https://t2.uc.ltmcdn.com/es/posts/0/3/0/cuales_son_las_propiedades_del_romero_17030_paso_2_600.jpg" />
            <Card.Body>
                <Card.Title>Romero</Card.Title>
                <Card.Text>Planta aromática</Card.Text>
                <Card.Text>$ 200</Card.Text>
            </Card.Body>
        </Card>
        : <p>cargando...</p>
        }
        </>
    )
}

export default ItemDetail;