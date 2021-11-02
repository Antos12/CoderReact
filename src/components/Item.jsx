import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import perfume from "../assets/img/humor.jpg";


function Item({prod}){
    return(
        <div className='cartaProducto'>
            <Container>
                <Row>
                <img src={perfume} className='imagenProducto' alt="" /> 
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>{prod.producto}</Col>
                </Row>
                <Row>
                    <Col xs={6}>Tipo: </Col>
                    <Col xs={6}>{prod.tipo}</Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio</Col>
                    <Col xs={6}>{prod.precio}</Col>
                </Row>

            </Container>
        </div>
    )
}

export default Item;