import React from 'react'
import perfume from '../assets/img/humor.jpg'
function ItemDetail({item}) {
    console.log(item)
    return (
        <div >
            <br />
            <div className='imagenDetalle'><img src={perfume} alt="imagen ilustrativa del producto" /></div>
            <div>{item.producto}</div>
            <div>{item.tipo}</div>
            <div>{item.descripcion}</div>
            <div>{item.precio}</div>
        </div>
    )
}

export default ItemDetail