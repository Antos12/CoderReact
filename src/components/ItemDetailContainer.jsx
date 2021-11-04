import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [item, setItem]=useState()
    const getItem= new Promise((resolve,reject)=>{
        const ItemDetail={
            "id": "1",
            "producto":"figuras haikyuu",
            "tipo": "Anime",
            "precio": "$1390",
            "descripcion":"Figuras de plascico de 10 cm, se venden por separado ",
            "imagenUrl": ""
        }
        setTimeout(()=>{
            resolve(ItemDetail)
        },2000)
        })
        useEffect(() => {
            getItem
            .then((ItemDetail)=>setItem(ItemDetail))
        }, [])
        return(
            <div>
                <ItemDetail item={item}/>
            </div>
        )
    }
    export default ItemDetailContainer
