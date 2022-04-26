import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';

function App() {
   return (
     <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <hr />
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:idCategory" element={<ItemListContainer />}/>
                  <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                  <Route path='/Cart' element={<Cart />} />
              </Routes>
            <hr />
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
