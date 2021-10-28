import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import perfume from "../assets/img/humor.jpg"

function Item(){
    return(
        <div className='cartaProducto'>
            <Container>
                <Row>
                <img src={perfume} className='imagenProducto' alt="" /> 
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>Perfume</Col>
                </Row>
                <Row>
                    <Col xs={6}>Nombre</Col>
                    <Col xs={6}>Humor primeriro Femenino</Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio</Col>
                    <Col xs={6}>$3005</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;