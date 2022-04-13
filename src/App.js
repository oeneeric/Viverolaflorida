import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
   return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Todo para tu jardín!"/> */}
      <ItemDetailContainer />
      <hr />
    </div> 
  );
}

export default App;
