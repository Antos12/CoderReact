import React from 'react'
import { Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import App from '../App'
import logo from '../assets/img/logo.jpg'

import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Nav className="navBar">
           
                <Container  fluid="md" className="Container-fluid">

                    <div>
                        <Link to='/' element={<App />}>
                            <img src={logo} alt="Imagen logo de la web" className="logo"></img>
                        </Link>

                    </div>
                    
                    <div className="contenedorCarrito">
                        <CartWidget/>

                    </div>
                </Container>
                <Container fluid="md">
                <div className="navBar-Encabezado">
                        <Link to='/' element={<App />}>

                            <h4>Home</h4>

                        </Link>
                        <Link to='/Nosotros'>
                            <h4>Nosotros</h4>
                        </Link>
                        <Link to='Galeria'>
                            <h4>Galeria</h4>
                        </Link>




                        <Link to='/Contacto'>
                            <h4>
                                Contacto
                            </h4>

                        </Link>


                    </div>
                </Container>

        
        </Nav>
    )
}

export default NavBar