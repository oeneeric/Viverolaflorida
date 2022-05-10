import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";
// import customFetch from "./customFetch";
// import products from "./products";


const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { idItem } = useParams();

    useEffect(() => {

        const firestoreFetchOne = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))

    },[]);

    // useEffect(() => {
    //     customFetch(1000, products.find(item => item.id === parseInt(idItem)))
    //         // .then(result => console.log("promesa", result))
    //         .then(result => setData(result))
    //         .catch(err => console.log(err))
    // },[idItem]);

    return (
        <div className="body">
        <ItemDetail item={data} />
        </div>
    );
}

export default ItemDetailContainer;