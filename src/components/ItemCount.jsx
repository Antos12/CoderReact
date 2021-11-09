
import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';




function ItemCount (props){
    const [contador, setContador]= useState (props.initial);

    
   
    function agregar (){

       if(contador < props.stock )
        setContador (contador +1);
    }

    function quitar (){
        if(contador> 0 )
        setContador (contador-1);
        
    }

        
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
            <button  onClick={()=>{props.onAdd(contador)}} className='btn btn-primary'> Agregar al carrito</button>
        </div>
        
        )
}



export default ItemCount;