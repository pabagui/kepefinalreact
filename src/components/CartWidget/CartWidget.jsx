import React from 'react'
import { useCartContext } from '../../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'


export const CartWidget = () => {

    const { cantidad } = useCartContext()
//cambiar cantidad por nombre ingles y en el padre (cartcontext)
    return (
        <div className="w-25">
            <img src="./img/cesta-de-la-compra.png" alt="cesta de compras" className="w-25"/>
            <Badge bg="danger">{ cantidad() !== 0 && cantidad() }</Badge>
            <span className="visually-hidden">unread messages</span>
        </div>
    )
}
