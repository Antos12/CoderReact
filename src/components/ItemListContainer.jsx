import {useState,useEffect} from 'react';

import ItemList from './ItemList';
import {getProducts} from './GetProducts'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'




function ItemListContainer(){
    const[productos,setProductos]=useState([])
    const {categoriaId}=useParams()
    useEffect(()=>{
        if (categoriaId){
            getProducts
            .then ((res)=>{
                setProductos(res.filter(prod=>prod.categoria===categoriaId))
            })
        } else{
            getProducts
            .then((res)=>{
                setProductos(res)
            })
        }
    },[categoriaId])
    if(productos===null)
    return <h1>Loading</h1>
    else
    return(
        <div>
            <Link to={`/Anime`}>
                <button variant='primary'>Ver Anime</button>
            </Link>
            <Link to={'/comic'}>
                <button variant='primary'>Ver Comic</button>
            </Link>
            <ItemList products={productos}/>
        </div>
    )

   
}


export default ItemListContainer;
