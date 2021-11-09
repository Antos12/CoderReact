import React from 'react'
import haikyuu from "../assets/img/haikyu.jpg";
import ItemCount from './ItemCount';
import { Spinner,Card} from 'react-bootstrap'
function ItemDetail({ item }) {
    
    const agregarCarrito =(contador)=>{
        if(contador>0)

        
        alert(`Ha agregado: ${contador} productos`);
        else
        alert('No hay productos agregados')
    

    }
    if (item == null) {
        return (<div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>)

    }
    else

        return (
          <div>
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={haikyuu}  className="card-Detalle"/>
               <Card.Body>
                    <Card.Title>{item.producto}</Card.Title>
                    <Card.Text>
                         {item.descripcion}
                    </Card.Text>
                    <Card.Text>
                         {item.tipo}
                         {item.precio}
                    </Card.Text>
                   <div>
                       <ItemCount initial={1} stock='5' onAdd={agregarCarrito}/>
                   </div>
              </Card.Body>
            </Card>

        </div>
        
        )
}

export default ItemDetail