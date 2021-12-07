const ItemRecibo=({producto})=>{
    console.log(producto)
    return(
        <tr>
            <td>{producto.name}</td>
            
            <td>{producto.price}</td>
            <td>{producto.cantidad}</td>
        </tr>

        )

}

export default ItemRecibo