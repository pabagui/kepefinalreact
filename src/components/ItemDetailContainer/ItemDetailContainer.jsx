import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getProducts } from '../helpers/mock';
import { ItemDetail } from '../ItemDetail/ItemDetail';




//import { productos } from '../helpers/productosArray'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    //const idProducto = '1'
    const { idProduct } = useParams() // CAMBIÉ IDPRODUCTO POR IDPRODUCT
    //console.log(product)
 
    useEffect(() => {
        const db = getFirestore() //crea conexión con firestore
        const itemRef = doc(db, 'items', idProduct) //de la conexión con firestore trae la colección item y dentro, el objeto con ese id
        getDoc(itemRef) //promesa que trae el objeto
        .then(resp => setProduct( { id: resp.id, ...resp.data()} )) //con función data obtengo todos los datos del objeto
        //con el then guardo la respuesta
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
      
      
        /*
        getProducts
        .then(res => setProducts(res.find(products => products.id === idProducto)))
        .catch(err => console.log(err))
        */
    }, [])

            
//usar en itemdetailcontainer
        



 //console.log(product)
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
