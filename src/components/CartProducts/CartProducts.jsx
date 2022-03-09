import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'

const CartProducts = ({ product }) => {

    const { removeItem } = useCartContext()

  return (
    <div>
        <li>{product.item.title} {product.item.name}, Precio: ${product.item.price}, Cantidad: {product.quantity}
            <Button variant="danger" onClick={() => removeItem(product.item.id)}>x</Button>
        </li> 
        </div>
  )
}

export default CartProducts