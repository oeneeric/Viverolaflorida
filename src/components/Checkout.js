import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {

    return (
        <>
            <Link to='/Cart' style={{textDecoration: "none"}}><Button variant="success" color="primary">CheckOut</Button></Link>
        </>
    )
}

export default Checkout;