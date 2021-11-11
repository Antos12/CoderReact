import React, { createContext, useContext, useState } from 'react'

const CartContext= createContext();
export const useCartContext=()=> useContext(CartContext)
const CartContextProvider = ({children}) => {
    const [cartList, setCartList]=useState([])
    const showCartList=()=>{
        console.log(cartList)
    }
    const addToCart=(item)=>{
        setCartList([
            ...cartList,
            item
        ])
    }
    const isInCart=(itemId)=>{

        const estado= cartList.find(prod=> prod.id===itemId)
        if(estado==null)
        return false
        else
        return true
    }
    return (
        <CartContext.Provider value={{
            cartList,
            showCartList,
            addToCart,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider