import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
   return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Todo para tu bebé!" />
      <hr />
      <ItemCount />
    </div> 
  );
}

export default App;
