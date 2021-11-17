import React from 'react'
import carrito from '../assets/img/carrito.jpg'
import {useCartContext} from '../components/context/CartContext'
function CartWidget() {
    const{cartCount}=useCartContext()
    if(cartCount()>0)
    return (
        <div>
            <div className='contenedorCarrito'>
            <img src={carrito} alt="" />

            </div>
            <div>
            <p>{cartCount()}</p>
            </div>
        </div>
    )
    else
    return(
        <div className='divVacio'>
            
        </div>
    )
}

export default CartWidget
