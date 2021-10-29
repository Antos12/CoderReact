import React from 'react';
import ItemCount from './ItemCount'

function ItemListContainer(){
    return(
        
        <div className='contenedorLista'>

            <ItemCount initial={1} stock="10"/>
            

        </div>
    )
}


export default ItemListContainer;
