import {useState, useEffect} from 'react' 
import ItemDetail from './ItemDetail'
 function ItemDetailContainer() {
    const [item,setItem]=useState()
    const itemDetail ={
        "id": "1",
        "producto":"figuras haikyuu",
        "tipo": "Anime",
        "precio": "$1390",
        "descripcion": "Figuras de 15 cm de plastico, se venden por separado",
        "imagenUrl": ""
           
    }
    const getItem= new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve(itemDetail)
        },2000)
     })
     useEffect(() => {
        getItem.then((itemDetail)=> setItem(itemDetail))
         }, [])
     return (
         <div>
            <ItemDetail item={item} />             
         </div>
     ) 
     }
     export default ItemDetailContainer