import { useEffect, useState } from 'react'
import { query, collection, getDocs, getFirestore, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = ( {greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items') 

        const queryFilter =! idCategory ? 
            queryCollection
          :
            query(queryCollection, 
               where('title', '==', idCategory)
            )
            
            getDocs(queryFilter)
                .then(resp => setProducts( resp.docs.map(prod =>( { id: prod.id, ...prod.data() }) ) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))

    }, [idCategory])

    return (
        <div>
            <p>{ greetings }</p>
            { loading ? 
                <h2>Cargando página ...</h2> 
            : <ItemList products={products} /> 
            }                 
        </div>
    )
}
