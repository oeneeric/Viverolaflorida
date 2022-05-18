import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) =>{
    const [count, setCount] = useState(0);

    useEffect(() =>{
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);    
        }
    }

    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);            
        }  
    }

    return(
        <div>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
            <p>{count}</p>
            {
                stock && count
                ? <Button variant="primary" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="primary" disabled>Add to Cart</Button>
            }
        </div> 
    );
}

export default ItemCount;
