import React from 'react';
import ItemList from './ItemList';
function ItemListContainer(){
    return(
        <div className='contenedorLista'>
            <ItemList buscar='Crema'/>

        </div>
    )
}


export default ItemListContainer;
