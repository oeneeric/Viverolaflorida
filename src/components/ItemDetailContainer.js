import { useEffect, useState } from 'react';
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import ItemCount from './ItemCount';
import products from "./products";

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        customFetch(1500, products[0])
            // .then(result => console.log("promesa", result))
            .then(result => setData(result))
            .catch(err => console.log(err))
    },[]);

    return (
        <div className="body">
        <ItemDetail items={data} />
        <ItemCount />
        </div>
    );
}

export default ItemDetailContainer;