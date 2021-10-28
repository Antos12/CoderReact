
import React from 'react';
import Item from "./Item";


function getData(){
const misproducto = [
    {
        "imagenUrl": "",
        "Producto": "Perfume",
        "Nombre": "Humor meu primeiro",
        "Precio": "3005",

    },{
        "imagenUrl": "",
        "Producto": "Crema",
        "Nombre": "Tododia Crema corporal",
        "Precio": "750",
    },{
        "imagenUrl": "",
        "Producto": "Labial",
        "Nombre": "Labial matte",
        "Precio": "450",
    }
];

return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve(misproducto);
    },2000)
});
}



function ItemList(props){
    getData().then((misproducto)=>{
        const productosBuscados=misproducto.filter((filtrados)=>{
            return filtrados.Producto===props.buscar;
        })
          
        console.log(productosBuscados)
      })
      
    return(
        <div className='contenedorLista'>
       <Item/>
            
        </div>
        
    )
}
export default ItemList;






