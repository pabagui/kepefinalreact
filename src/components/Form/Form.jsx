import { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import { getFirestore, addDoc, collection, query, documentId, writeBatch, getDocs, where } from 'firebase/firestore';
import Button from 'react-bootstrap/Button'

const Form = () => {
    
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
                    clear()
                    alert(`Tu pedido ha sido enviado. Gracias por comprar en K'epe Bags`)
              })        
          batch.commit() 
      }

    const handleChange = (event) => {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    

  return (
    <div>
        <form onSubmit={buyOrder}>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='nombre' 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='teléfono' 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <br/>
                    <br/>
                    <Button variant="dark" onClick={buyOrder}>Generar orden de compra</Button>
        </form>
    </div>
  )
}


export default Form