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
    const removeFromCart = (id)=>{
        let posicion= cartList.findIndex(prod=> prod.id===id)
        let newCartList= cartList
        newCartList.splice(posicion, 1) 
        setCartList([...newCartList])
    }
    const removeAll=()=>{
        setCartList([])
    }
    const cartCount=()=>{
        let count= cartList.length
        return count
    }
    return (
        <CartContext.Provider value={{
            cartList,
            showCartList,
            addToCart,
            isInCart,
            removeFromCart,
            removeAll,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider