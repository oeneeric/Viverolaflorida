import products from "./products"

let is_ok = true;

const customFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (is_ok) {
               resolve(products);
            } else {
                reject("No se cargaron los productos");
            }
        },1000);
    });
}

export default customFetch;