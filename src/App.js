
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import ItemCount from './components/ItemCount';
function App() {

  return (
    <div>
    < NavBar />
    <ItemListContainer greeting = "Hola soy el mensaje "/>
    <ItemCount  stock="10"/>
    </div>
    
  );
}

export default App;
