import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
   return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Todo para tu bebé!" />
      <hr />
    </div> 
  );
}

export default App;
