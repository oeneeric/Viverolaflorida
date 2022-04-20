import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
   return (
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
  );
}

export default App;
