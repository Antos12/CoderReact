import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { getProducts } from "./GetProducts";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [item, setItem]=useState()
       const {itemId}=useParams()
       useEffect(()=>{
           getProducts
           .then(res=>{
               setItem(res.find(prod=>prod.id===itemId))})
       },[itemId])
         
        return(
            <div>
               <ItemDetail item={item}/>
            </div>
        )
    }
    export default ItemDetailContainer
