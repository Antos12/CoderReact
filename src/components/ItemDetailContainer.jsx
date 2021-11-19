import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../service/getFirestore";
import { getProducts } from "./GetProducts";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(){
    const [item, setItem]=useState()
       const {itemId}=useParams()
       useEffect(()=>{
           const db= getFirestore()
           const dbQuery= db.collection('items').doc(itemId).get()
           dbQuery.then(res=>setItem({id:res.id,...res.data()}))
           /* getProducts
           .then(res=>{
               setItem(res.find(prod=>prod.id===itemId))}) */
       },[itemId])
         
        return(
            <div>
               <ItemDetail item={item}/>
               
            </div>
        )
    }
    export default ItemDetailContainer
