import { useState, useEffect } from 'react';

import ItemList from './ItemList';
import { getProducts } from './GetProducts'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {getFirestore} from '../service/getFirestore'




function ItemListContainer() {
  const [productos, setProductos]=useState([])
  const [producto, setProducto]=useState({})
  const { categoriaId } = useParams()
  useEffect(()=>{
      const db=getFirestore()
      if(categoriaId)
      {
        const dbQuery=db.collection('items').where('category','==',categoriaId).get()
      dbQuery.then( res=> setProductos(res.docs.map(prod=>({id:prod.id , ...prod.data() } ))))
      } else{
      const dbQuery=db.collection('items').get()
      dbQuery.then( res=> setProductos(res.docs.map(prod=>({id:prod.id , ...prod.data() } ))))
    }

     
    }, [categoriaId])
    console.log(productos);
       
    
   
        /* if (categoriaId){
            getProducts
            .then ((res)=>{
                setProductos(res.filter(prod=>prod.categoria===categoriaId))
            })
        } else{
            getProducts
            .then((res)=>{
                setProductos(res)
            })
        } */
  

    if (productos === null)
        return <h1>Loading</h1>
    else
        return (
            <div>
                <Link to={`/Anime`}>
                    <button variant='primary'>Ver Anime</button>
                </Link>
                <Link to={'/Comics'}>
                    <button variant='primary'>Ver Comics</button>
                </Link>
                <ItemList products={productos} />
            </div>
        )
    


}


export default ItemListContainer;
