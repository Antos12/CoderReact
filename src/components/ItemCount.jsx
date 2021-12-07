
import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";




function ItemCount (props){
    const [contador, setContador]= useState (props.initial);
    let estado=props.estado;
    
    
    
   
    function agregar (){

       if(contador < props.stock )
        setContador (contador +1);
    }

    function quitar (){
        if(contador> 0 )
        setContador (contador-1);
        
    }
  if(estado===false)
    return(
        <div className='contador'>
            <div className='contador-botones'>
            <Button onClick={quitar} variant="outline-secondary">Quitar</Button>
            
            <div className='contenido'>
                <Alert variant='primary'>
                <p>cantidad: {contador}</p>
                </Alert>
            </div>
            <Button onClick={agregar} variant="outline-secondary">Agregar</Button>


            </div>
            <button  onClick={()=>{
                estado=true
                props.onAdd(contador, estado) 
             
            }} className='btn btn-primary'> Agregar al carrito</button>
       
        </div>
        
        )
        else{
            return(
                <Link to='/Cart'>
                <Button>Finalizar compra</Button>
                </Link>
            )
            
        }
}



export default ItemCount;