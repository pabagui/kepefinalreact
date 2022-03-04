import { useState } from 'react';
//import { productos } from '../helpers/productosArray'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useCartContext } from '../../context/CartContext';




export const ItemDetail = ({product}) => {
  //const { name, title, stock, price, pictureUrl } = productos
  const [counter, setCounter] = useState(0)
  const { cartList , addItem } = useCartContext()


  function onAdd(cant) {
   // console.log(cant)
   //cambiar cant por quant
    addItem({item: product, quantity: cant}) //usar en el desafío addItem({item: productos, quantity: cant})
    setCounter(cant)
}

  //console.log(cartList)

  return (
      <>   
  
            <Container className="d-flex justify-content-center">  {/* //arreglar este layout*/}
                <Row xs="auto">
                    <div className='card w-25 mt-5'>
                                <div className='card-header'>
                                  {product.name} - {product.title}
                                </div>
                                <div className='card-body'>
                                  <img src={product.pictureUrl} alt='alforja' className='w-50'/>
                                  ${product.price}
                                  <h5>Stock: {product.stock}</h5>                      
                                </div>
                                <div>
                                  {counter === 0 ?
                                      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                                    :
                                      <>
                                        <Link to='/cart'>
                                          <Button variant="dark">Finalizar compra</Button>
                                        </Link>
                                        <Link to='/'>
                                          <Button variant="dark">Ver más productos</Button>
                                        </Link>
                                      </>
                                  }
                                  
                                </div>
                    </div>
                </Row>
            </Container>
      </>
  )
};
 