import {useEffect, useState} from 'react'
import haikyuu from "../assets/img/haikyu.jpg";
import { useCartContext } from './context/CartContext';
import ItemCount from './ItemCount';
import { Spinner,Card} from 'react-bootstrap'

function ItemDetail({ item }) {
    const [cantidadPorComprar, setCantidadPorComprar]=useState();
    const [estado, setEstado]=useState(false);
    const {cartList, addToCart,isInCart}=useCartContext()
    useEffect(()=>{
        return
    } ,[cantidadPorComprar])
     
    
    const agregarCarrito =(contador,estado)=>{
        
        
        if(contador>0){
            setCantidadPorComprar(contador)
        setEstado(estado)
        const prodToAdd={
            "id":item.id,
            "producto":item.producto,
            "precio":item.precio,
            "cantidad":contador
        }
         if(isInCart(prodToAdd.id)===false){
             console.log('se puede agregar')
             addToCart(prodToAdd)
         }
         else
         console.log('no se puede agregar')
         
        }
        else
        alert('no hay nada que agregar')
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
                       <ItemCount initial={1} stock='5' onAdd={agregarCarrito} estado={estado}/>
                   </div>
              </Card.Body>
            </Card>

        </div>
        
        )
       
}

export default ItemDetail