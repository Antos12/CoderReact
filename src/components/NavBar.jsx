import logo from '../imagenes/logo.jpg'
const menu=()=>{
    return(
        <div className='navBar'>
            <div className='logo' href='#'> 
            <img src={logo} alt="" />  </div>
            <div className='item'href='#'>Home</div>
            <div className='item' href='#'>Productos</div>
            <div className='item' href='#' >Contacto</div>
            
        </div>

    );

} 
export default menu
