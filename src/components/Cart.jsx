import React, { useState } from "react";
import { useCartContext } from "./context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import { Button, Table, Form } from "react-bootstrap";
import firebase from "firebase";
import { getFirestore } from "../service/getFirestore";
import Recibo from '../components/Recibo'


const Cart = () => {
    const [estadoCompra, setEstadoCompra] = useState(false)
    const [recibo, setRecibo] = useState({})
    const { cartList, removeAll, removeFromCart } = useCartContext()
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        repetirEmail: ''

    })
    const validar = (e) => {
        e.preventDefault()
        formData.email === formData.repetirEmail ?
            generarOrden()
            : alert('los emails no coinciden. Intentelo nuevamente')

    }
    const generarOrden=()=>{
        let orden= {}
        let idCompra
        orden.comprador= formData
        orden.total= calcularTotal(cartList)
        orden.fecha=firebase.firestore.Timestamp.fromDate(new Date())
        
        const dbQuery= getFirestore()
        dbQuery.collection('orders').add(orden)
        .then(resp=> idCompra=resp.id)
        .catch(err=> console.log(err))
        .finally(()=>{setFormData({
            nombre:'',
            email:'',
            telefono:''
        })
        setRecibo({
            "comprador": orden.comprador,
            "productos": cartList,
            "total": orden.total,
            "id": idCompra
        })
        setEstadoCompra(true)

        alert('compra realizada. Su id de compra es:'+ idCompra)
        })
    }
    const handlerChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const calcularTotal = (cartList) => {
        let precio
        let subTotal = 0
        if (cartList != null) {
            cartList.forEach(prod => {
                precio = prod.cantidad * prod.price
                subTotal = subTotal + precio
            })
            return subTotal
        }
    }
    if (cartList.length === 0)
        return (
            <>
                <h2>El carrito esta vacio</h2>
                <Link to='/'>
                    <Button>Volver al inicio para agregar productos</Button>
                </Link>
            </>
        )
    else {
        if (estadoCompra === true)
            return <Recibo recibo={recibo} removeAll={removeAll}/>
                else
                return(
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
                        <Form onSubmit={validar} onChange={handlerChange}>
                            <input type="text" name='nombre' placeholder='nombre' value={formData.nombre} />
                            <input type="text" name='telefono' placeholder='telefono' value={formData.telefono} />
                            <input type="email" name='email' placeholder='email' value={formData.email} />
                            <input type="email" name='repetirEmail' placeholder='repita su email' value={formData.repetirEmail} />
                            <button>Enviar</button>

                        </Form>
                    </div>


                )

    }
}
  
export default Cart