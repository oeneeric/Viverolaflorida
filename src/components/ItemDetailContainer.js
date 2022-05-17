import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "./firestoreFetch";

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="body">
        <ItemDetail item={data} />
        </div>
    );
}

export default ItemDetailContainer;