import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = () =>{
    const[count, setCount] = useState(1);

    const increment = () =>{
        if (count < 5) {
            setCount(count+1);    
        }
        
    }

    const decrement = () =>{
        if (count > 1) {
            setCount(count-1)
            
        }  
    }

    const addToCart = () =>{
        if (count >= 1) {
            alert("Se agrego al carrito")        
        }
    }

    return(
        <div>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
            <p>{count}</p>
            <Button onClick={addToCart} className="btnAddToCart">ADD TO CART</Button>
        </div> 
    );
}

export default ItemCount;
