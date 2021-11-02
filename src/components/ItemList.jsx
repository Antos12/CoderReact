
import React from 'react';

import Item from "./Item";






function ItemList({products}){
      
    return(
        <div className='contenedor-general-productos'>
            {products.map(prod=><Item key={prod.id} prod={prod}/>)}
            
        </div>
        
    )
}
export default ItemList;






