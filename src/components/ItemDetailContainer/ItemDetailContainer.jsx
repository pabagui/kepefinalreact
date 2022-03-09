import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getProducts } from '../helpers/mock';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams() 

 
    useEffect(() => {
        const db = getFirestore() 
        const itemRef = doc(db, 'items', idProduct) 
        getDoc(itemRef) 
        .then(resp => setProduct( { id: resp.id, ...resp.data()} ))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])

  return (
    <>
      { loading ?
            <h2>Cargando página...</h2>
          :
            <ItemDetail product={product} />
      }   
    </>
  )  
};
