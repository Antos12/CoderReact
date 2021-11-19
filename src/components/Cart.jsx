import React  from "react";
import { useCartContext } from "./context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";


const Cart = () => {
    const {cartList, removeAll, removeFromCart}=useCartContext()
    const calcularTotal=(cartList)=>{
        let precio
        let subTotal=0
        console.log(cartList)
        if(cartList!=null) {
            cartList.map(prod => {
                console.log(prod)
                precio= prod.cantidad*prod.price
                subTotal= subTotal+precio
            })
            return subTotal
        }
    }
    if(cartList.length===0)
            return(
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to='/'>
                        <Button>Volver al inicio para agregar productos</Button>
                    </Link>
                </>
            )
    else
    return (
        <div>
            <div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Precio por X Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cartList.map(prod => <ItemCart removeFromCart={removeFromCart} key={prod.id} prod={prod} />)
                        }

                    </tbody>
                    <tr>
                        <td>
                            <h2>Total: {calcularTotal(cartList)}</h2>
                        </td>
                    </tr>
                </Table>
                <Button onClick={removeAll}>Vaciar Carrito</Button>
            </div>
            <Link to='/'>
                <Button>Volver para seguir comprando</Button>
            </Link>
        </div>

    )
}
export default Cart