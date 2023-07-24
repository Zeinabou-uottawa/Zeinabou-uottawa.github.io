import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import "./jewelry.css";
function JewelryItems({ name, price, material, type, stock, id,image }) {
    
    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image}  alt={name} style={{ width: '287px', height: '200px' }}/>
            <Card.Body style={{ width: '250px', height: '200px' }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Type:</Col>
                        <Col>{type}</Col>
                    </Row>
                    <Row>
                        <Col>Price:</Col>
                        <Col>{price}</Col>
                    </Row>
                    <Row>
                        <Col>Material:</Col>
                        <Col>{material}</Col>
                    </Row>
                </Card.Text>
                <Container className='text-center'>
                    <a href="/form-state">       
                    <Button className="buyBttn" >Buy</Button>
                    </a>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default JewelryItems;