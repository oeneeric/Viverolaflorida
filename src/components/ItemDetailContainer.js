import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import products from "./products";


const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(1000, products.find(item => item.id === parseInt(idItem)))
            // .then(result => console.log("promesa", result))
            .then(result => setData(result))
            .catch(err => console.log(err))
    },[idItem]);

    return (
        <div className="body">
        <ItemDetail item={data} />
        </div>
    );
}

export default ItemDetailContainer;