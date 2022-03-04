import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, addDoc, collection, doc, updateDoc, query, documentId, writeBatch, getDocs, where } from 'firebase/firestore';
import Button from 'react-bootstrap/Button'


const Cart = () => {

  const { cartList, removeItem, clear, totalCart } = useCartContext()

  const buyOrder = async (e) => {
    e.preventDefault()

    let order = {}

    order.buyer = {name:'Pablo', email: 'aguila.pablo@gmail.com' , phone: '991383361'} //agregar formulario
    order.total = totalCart()

    order.items = cartList.map(cartItem => {
      const id = cartItem.item.id
      const name = cartItem.item.name
      const price = cartItem.item.price * cartItem.quantity
      const quantity = cartItem.quantity

      return {
        id,
        name,
        price,
        quantity
      }

    })

    //console.log(order)

      const db = getFirestore()
      const ordersCollection = collection(db, 'orders')
      await addDoc(ordersCollection, order)
        .then(resp => console.log(resp))

  //para actualizar el stock o cualquier campo que quiera del documento
  /*
      const queryCollection = collection(db, 'items')     
      const queryDoc = doc(db, 'items', '6rpehHEzKg2ugWczKAbV' )
      updateDoc(queryDoc, {
        stock: 3
      })
    .then(resp => console.log(resp)) 
    */

  //actualizar stock
      const queryCollection = collection(db, 'items')

      const queryUpdateStock = query(  //es un filtro
          queryCollection,
          where( documentId(), 'in', cartList.map(it => it.item.id) ) //verifica ids de colección y map devuelve arrya nuevo transformado
      )

      const batch = writeBatch(db)
      await  getDocs(queryUpdateStock) //trae elos arrays del foltro que están en el carro
          .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
            })
          ))
          .catch(err => console.log(err))
          .finally(() => console.log('Stock actualizado')) //acá en vez de cosole.log poner función de borrar carro y alert de compra realizada
    batch.commit() //hace el cierre y actualiza el stock en firestore
  }

 

    return <div className="container w-50"> 
      {cartList.length !== 0 ? <>
        { cartList.map(product => 
        <li>{product.item.title} {product.item.name}, Precio: ${product.item.price}, Cantidad: {product.quantity}
        <Button variant="danger" onClick={() => removeItem(product.item.id)}>x</Button>
        </li> 
        )}
        {`El total de tu compra es $${totalCart()}`}
        <Button variant="dark" onClick={clear}>Vaciar canasta</Button>
        <Button variant="dark" onClick={buyOrder}>Generar orden de compra</Button>
        </>     
        :
        <>
        <span>Canasta vacía</span>
        <Link to='/'>
           <Button variant="dark">Ver productos en tienda</Button>
        </Link>
        </>
      }
      </div>
};


export default Cart;
