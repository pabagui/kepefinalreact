import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {

    return (
        <div>
            <Container> 
                <Row xs="auto">                  
                        <div className='card w-25 mt-5'>
                                <div className='card-header'>
                                { `${item.name} - ${item.title}` }
                                </div>
                                <div className='card-body'>
                                <img src={item.pictureUrl} alt='alforja' className='w-50'/>                 
                                </div> 
                                <div className='card-footer'>
                                    <Link to={`/item/${item.id}`}>
                                        <Button variant="dark">
                                            detalle del producto
                                        </Button>
                                    </Link>                           
                                </div>
                        </div>                  
                </Row>
            </Container>
            </div>
    )
}

