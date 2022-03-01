import React from 'react';
//import { productos } from './helpers/productosArray'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
//export const Item = ({ id, name, title, stock, price, pictureUrl}) => {

console.log('item')
    return (
        <div className='card w-25 mt-5'>
                        <div className='card-header'>
                           { `${item.name} - ${item.title}` }
                        </div>
                        <div className='card-body'>
                        <img src={item.pictureUrl} alt='alforja' className='w-50'/>
                        ${item.price}
                        <h5>Stock: {item.stock}</h5>                      
                        </div>
                        <div className='card-footer'>
                            <Link to={`/item/${item.id}`}>
                                <Button variant="dark">
                                    detalle del producto
                                </Button>
                            </Link>                           
                        </div>
            </div>

    )

}

