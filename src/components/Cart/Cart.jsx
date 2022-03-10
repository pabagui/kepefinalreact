import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, addDoc, collection, query, documentId, writeBatch, getDocs, where } from 'firebase/firestore';
import Button from 'react-bootstrap/Button'
import Form from '../Form/Form';
import CartProducts from '../CartProducts/CartProducts';


const Cart = () => {

 
  const  [orderId, setOrderId] = useState('')  

  const  [dataForm, setDataForm] = useState({ 
            name: '',
            phone: '',
            email: '', 
})

  const { cartList, clear, totalCart } = useCartContext()

  const buyOrder = async (e) => {
    e.preventDefault()

    let order = {}

    order.buyer = dataForm
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

      const db = getFirestore()
      const ordersCollection = collection(db, 'orders')
      await addDoc(ordersCollection, order)
        .then(resp => setOrderId(resp.id))

      const queryCollection = collection(db, 'items')

      const queryUpdateStock = query( 
          queryCollection,
          where( documentId(), 'in', cartList.map(it => it.item.id) ) 
      )
      const batch = writeBatch(db)

      await  getDocs(queryUpdateStock) 
          .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
            })
          ))
          .catch(err => console.log(err))

          .finally(() => {
                  setDataForm({ 
                    name: '',
                    phone: '',
                    email: '',   
                })
          })        
      batch.commit() 
  }

    return <div className="container w-50"> 
              {orderId !== '' && `El número de tu pedido es ${orderId} , gracias por comprar en K'epe Bags`}
              <br/>            
              {cartList.length !== 0 ? 
                <>
                  { cartList.map( (product) => 
                    <CartProducts
                      key={product.item.id} 
                      product={product} 
                    />                   
                    )}
                  <br/>
                  {`El total de tu compra es $${totalCart()}`}
                  <br/>
                  <br/>
                  <Button variant="dark" onClick={clear}>Vaciar canasta</Button>
                  <br/>
                  <br/>
                  <Form buyOrder={buyOrder} />
                  <br/>
                  <Link to='/'>
                  <Button variant="dark">Volver a la tienda</Button>
                  </Link>
                </>     
              :
                <>
                  <span>Canasta vacía</span>
                  <br/>
                  <Link to='/'>
                    <Button variant="dark">Ver productos en tienda</Button>
                  </Link>
                </>
              }
            </div>
};


export default Cart;
