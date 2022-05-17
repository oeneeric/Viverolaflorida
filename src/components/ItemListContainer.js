import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { firestoreFetch } from './firestoreFetch';

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    const { idCategory } = useParams(); // HOOK

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);
    
    return (
        <div className="fondo_body">
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;