import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig"
// import customFetch from "./customFetch";
// import products from "./products";

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    const { idCategory } = useParams(); // HOOK
    
    // useEffect (() =>{
    //     customFetch (1000, products.filter(item => {
    //         if (idCategory === undefined) return item;
    //         return item.categoryId === parseInt(idCategory)
    //     }))
    //         .then(result => setData (result))
    //         .catch(err => console.log(err))
    // }, [idCategory]);

    useEffect (() => {
        const fetchFromFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [data]);

    // useEffect(() => {
    //     return (() => {
    //         setData([]);
    //     })
    // }, []);
    
    return (
        <div className="fondo_body">
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;