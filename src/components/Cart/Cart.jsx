
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'
import Form from '../Form/Form';
import CartProducts from '../CartProducts/CartProducts';


const Cart = () => {

  const { cartList, clear, totalCart } = useCartContext()
 
    return <div className="container w-50">        
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
                  <Form />
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
