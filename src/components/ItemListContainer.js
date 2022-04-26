import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import customFetch from "./customFetch";
import products from "./products";
// const { products } = require('./products');

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    const { idCategory } = useParams(); // HOOK
    
    useEffect (() =>{
        customFetch (1000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setData (result))
            .catch(err => console.log(err))
    }, [idCategory]);

    
    return (
        <div className="fondo_body">
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;