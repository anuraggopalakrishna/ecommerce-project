import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const setEmptyCart = () => {
    let cart = {};
    for (let i =1; i < PRODUCTS.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(setEmptyCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }));
    }
    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                let temp = PRODUCTS.find((product) => product.id === Number(item))
                total += temp.price * cartItems[item];
            }
        }
        return total;
    }

  return (
    <ShopContext.Provider value={{cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}}>{props.children}</ShopContext.Provider>
  )
}

