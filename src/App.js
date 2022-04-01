import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
   return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Todo para tu bebé!" />
      <hr />
    </div> 
  );
}

export default App;
