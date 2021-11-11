import React from "react";
import { useCartContext } from "./context/CartContext";
import ItemCart from "./ItemCart";
import { Table } from "react-bootstrap";

const Cart = () => {
    const { cartList } = useCartContext()
    return (
        <div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre del producto</th>
                            <th>precio</th>
                            <th>cantidad</th>
                        </tr>
                    </thead>
                    
                </Table>

            </div>
            <div>

                {
                    cartList.map(prod => <ItemCart key={prod.id} prod={prod} />)
                }

            </div>
        </div>

    )
}
export default Cart