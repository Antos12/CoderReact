import React from 'react'
import { Table } from 'react-bootstrap'

const ItemCart = ({ prod }) => {
    console.log(prod)
    return (
        <div>
            <Table striped bordered hover>
                
                <tbody>
                    <tr>
                        <td>{prod.id}</td>
                        <td>{prod.producto}</td>
                        <td>{prod.precio}</td>
                        <td>{prod.cantidad}</td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}

export default ItemCart