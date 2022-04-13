// import { useEffect, useState } from 'react';
// import ItemCount from './ItemCount';
// import ItemList from './ItemList';
// import customFetch from "./customFetch";
// import products from "./products";
// // const { products } = require('./products');

// const ItemListContainer = ({greeting}) => {
//     const [data, setData] = useState ([]);

//     useEffect (() =>{
//         customFetch (1000, products)
//             .then(result => setData (result))
//             .catch(err => console.log(err))
//     }, []);
    

//     return (
//         <div className="fondo_body">
//         <h1>{greeting}</h1>
//         <ItemList items={data} />
//         <ItemCount />
//         </div>
//     );
// }

// export default ItemListContainer;