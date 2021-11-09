
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import Contacto from './components/Contacto'
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'

import Galeria from './components/Galeria'
import Nosotros from './components/Nosotros'
import Cart from './components/Cart'


function App() {

  return (
    <div>
       <BrowserRouter>
       < NavBar />
         <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/Contacto' element={<Contacto />} />
            <Route exact path='/Galeria' element={<Galeria />} />
            <Route exact path='/Nosotros' element={<Nosotros />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route  exact path='/:categoriaId' element={<ItemListContainer/>} />
            <Route exact path='/ItemDetailContainer/:itemId' element={<ItemDetailContainer/>}/>

          </Routes>
        </BrowserRouter>
    
    
    
    </div>
    
  );
}

export default App;
