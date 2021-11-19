import {useEffect, useState} from 'react'
import haikyuu from "../assets/img/haikyu.jpg";
import { useCartContext } from './context/CartContext';
import ItemCount from './ItemCount';
import { Spinner,Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
            "name":item.name,
            "price":item.price,
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
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                         {item.description}
                    </Card.Text>
                    <Card.Text>
                         {item.category}
                         {item.price}
                    </Card.Text>
                   <div>
                       <ItemCount initial={1} stock='5' onAdd={agregarCarrito} estado={estado}/>
                   </div>
                   
              </Card.Body>
            </Card>
            <Link to='/'>
                <Button>Volver para seguir comprando</Button>
            </Link>
            

        </div>
        
        )
       
}

export default ItemDetail