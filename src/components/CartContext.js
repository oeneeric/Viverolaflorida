import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
        } console.log(qty) 
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }


    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }
    
    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calcTotalPerItem, calcSubTotal, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );

}

export default CartContextProvider;