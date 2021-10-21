import logo from '../assets/img/logo.jpg'
import CartWidget from './CartWidget';
const NavBar=()=>{
    return(
        <div className='navBar'>
            <div className='logo' href='#'> 
            <img src={logo} alt="" />  </div>
            <div className='item'href='#'>Home</div>
            <div className='item' href='#'>Productos</div>
            <div className='item' href='#' >Contacto</div>
            <div className='item carrito'><CartWidget/></div>
        </div>

    );

} 
export default NavBar
