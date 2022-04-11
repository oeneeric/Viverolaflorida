import products from "./products"

const customFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           return resolve(products);
        },1000);
    });
}

export default customFetch;