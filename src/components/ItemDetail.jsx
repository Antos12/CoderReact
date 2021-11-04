import React from 'react'
import perfume from '../assets/img/humor.jpg'
import { Spinner } from 'react-bootstrap'
function ItemDetail({item}) {
    if(item==null){
    return (<div>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>)
    
    }
    else
    
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