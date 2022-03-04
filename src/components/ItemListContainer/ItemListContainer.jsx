import { useEffect, useState } from 'react'
import { query, collection, doc, getDoc, getDocs, getFirestore, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
//import ItemCount from './ItemCount'
import { ItemList } from '../ItemList/ItemList'



export const ItemListContainer = ( {greetings}) => {
    // console.log(props) == console.log( {greetings} ), es la call back con destructuring de la props
    const [products, setProducts] = useState([])
    //const [product, setProduct] = useState({}) //getDoc trae objeto (1), no array. getDocs trae muchos (array)
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {
//arreglar código repetido con ternario

        if(idCategory) {

        const db = getFirestore()
        const queryCollection = collection(db, 'items') //comentado porque cuando filtro lo pongo dentro del queryFilter
        //const queryFilter = query(queryCollection, where('price', '<=', 50000)) //se usa para categorías
        const queryFilter = query(queryCollection, 
            where('title', '==', idCategory)
            )

        getDocs(queryFilter)
        //getDocs(queryCollection) se usaba cuando solo tenía items, no categorías de productos  
        .then(resp => setProducts( resp.docs.map(prod =>( { id: prod.id, ...prod.data() }) ) ))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

        } else { 
            const db = getFirestore()
            const queryCollection = collection(db, 'items')          
            getDocs(queryCollection)
                .then(resp => setProducts( resp.docs.map(prod =>( { id: prod.id, ...prod.data() }) ) ))
                .catch(err => console.log(err))
                //.then(respuesta => console.log(respuesta))
                .finally(()=> setLoading(false)) //para que deje de mostrar el mensaje "cargando..."
            }
/*        
//usar en itemdetailcontainer
        const db = getFirestore() //crea conexión con firestore
        const itemRef = doc(db, 'items', '6rpehHEzKg2ugWczKAbV') //de la conexión con firestore trae la colección item y dentro, el objeto con ese id
        getDoc(itemRef) //promesa que trae el objeto
        .then(resp => setProduct( { id: resp.id, ...resp.data()} )) //con función data obtengo todos los datos del objeto
        //con el then guardo la respuesta
*/

    }, [idCategory])

    //console.log(product)
    //console.log(products)
 
    return (
        <div>
            {/*<h1>ITEMLIST</h1>*/}
            <p>{ greetings }</p>
            { loading ? <h2>Cargando página ...</h2> : <ItemList products={products} /> }                 
        </div>
    )
}
