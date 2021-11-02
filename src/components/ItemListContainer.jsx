import {useState,useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {getProducts} from './GetProducts'


function ItemListContainer(){
    const [productos, setProductos]=useState ([])
    useEffect (()=>{
        getProducts
        .then((products)=>{
            setProductos(products)
        })
    },[])
    return(
        
        <div className='contenedorLista'>
            <div className='contenedor-Producto'>
                <ItemList products={productos} />

            </div>
            <div className='contendor-Contador'>
                 <ItemCount initial={1} stock="10"/>
            </div>
            
            
            

        </div>
    )
}


export default ItemListContainer;
