import {  Button } from 'react-bootstrap'
import { useCartContext } from './context/CartContext'

const ItemCart = ({prod})=>{
    const {removeFromCart}= useCartContext()
    const calcularSubTotal=(prod)=>{
        let subTotal= prod.price*prod.cantidad
        return subTotal
    }



    return (
                    <tr>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.cantidad}</td>
                        <td>{calcularSubTotal(prod)}</td>
                        <td><Button variant="dark" onClick={()=>{
                            removeFromCart(prod.id)
                        }}>X</Button></td>
                    </tr>                   
    )
}

export default ItemCart