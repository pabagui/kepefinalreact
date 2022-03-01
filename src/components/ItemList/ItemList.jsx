//import { useEffect, useState } from 'react'

//import Button from 'react-bootstrap/Button'
import { Item } from '../Item/Item'
//import { Item } from './Item'
//import { useParams } from 'react-router-dom'
//import { getProducts } from './helpers/mock'



export function ItemList( { products } ) {
    // Desarrolla la vista utilizando un array de items y un map

    /*
       const [products, setProducts] = useState ([])
       const [loading, setLoading] = useState(true) //para mostrar mensaje de "cargando...""

       const { idCategory } = useParams()


       useEffect(() => {
           if(idCategory) {
            getProducts
            .then(res => setProducts(res.filter(prod => prod.title===idCategory)))
            .catch(err => console.log(err))
            //.then(respuesta => console.log(respuesta))
            .finally(()=> setLoading(false)) //para que deje de mostrar el mensaje "cargando..."

           } else {           
            getProducts
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                //.then(respuesta => console.log(respuesta))
                .finally(()=> setLoading(false)) //para que deje de mostrar el mensaje "cargando..."
            }
           }, [idCategory])
   
       //console.log(products)
    //console.log(idCategory)

*/

       return (
           <div>

               {/*} { products.map( (item) => <Item key={item.id} item={item}/> */}

                { products.map( (item) => <Item item={item}/>
                                               
               ) }

               {/*}
               { loading ? <h2>Cargando página...</h2> :
                                               products.map( (el) =>
                                               
                                               <Item
                                               key= {el.id}
                                               id= {el.id}
                                               name= {el.name}
                                               title= {el.title}
                                               stock= {el.stock}
                                               price= {el.price}
                                               pictureUrl= {el.pictureUrl}                                              
                                               /> 
               ) }
               */}
           </div>
       )
   
   }