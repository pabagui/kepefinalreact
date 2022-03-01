import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/CartContext'


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
        <div className="App">
            <NavBar /> {/* no se envuelve en Routes porque está fija en todas las páginas*/}
            <Routes>  {/* sirve para envolver componentes que se navegan */}
                <Route exact path='/' element={<ItemListContainer greetings= "Hola, bienvenido a K'epe bags" />} /> {/* Route vincula una ruta con un componente*/}
                <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
                <Route exact path='/item/:idProduct' element={<ItemDetailContainer />} /> {/* CAMBIÉ NOMBRE DE IDPRODUCTO*/}
                {/*<Route exact path='/item/:idProducto' element={<ItemDetailContainer greetings= "Hola, bienvenido a K'epe bags"/>} />*/}
                <Route exact path='/cart' element={<Cart />} />
            </Routes>
        </div>
      </CartContextProvider>
  </BrowserRouter>
  );
}

export default App;
