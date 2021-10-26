
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';




function ItemCount (props){
    const [contador, setContador]= useState (1);

    
   
    function sumar (){

       if(contador < props.stock && props.stock < 0)
        setContador (contador +1);
    }

    function restar (){
        if(contador>"1")
        setContador (contador-1);
        
    }

    function agregarCarrito (){
        
        alert('Ha agregado  '+ contador + 'productos')
    

    }
    
    return(
        <div className='contador'>
            <div className='contador-botones'>
            <Button onClick={sumar} variant="outline-secondary">Agregar</Button>
            <div className='contenido'>
                <p>cantidad: {contador}</p>
            </div>
            <Button onClick={restar} variant="outline-secondary">Quitar</Button>


            </div>
            <button  onClick={agregarCarrito} className='agregarcarrito'> Agregar al carrito</button>
        </div>
        
        )
}



export default ItemCount;