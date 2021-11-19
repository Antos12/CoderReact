import React from 'react';
import {Link} from 'react-router-dom'

import haikyuu from "../assets/img/haikyu.jpg";
import { Card,ListGroup,ListGroupItem,Button } from 'react-bootstrap';


function Item({prod}){
    return(
      <div className='cartaProducto'>
          <Card style={{ width: '18rem' }}>
               <Card.Img variant="center" src={haikyuu}  className="imagen-carta" />
                <Card.Body className="card-Body">
                   <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                        Precio: {prod.price}
                   </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush card-Agregado">
                   <ListGroupItem>tipo: {prod.category}</ListGroupItem>
    
                </ListGroup>
                <Card.Footer className="card-Footer">
                    <Link to={`/ItemDetailContainer/${prod.id}`}>
                        <Button variant='secondary'>Mas informacion</Button>
                    </Link>
                   
                  
                  
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Item;