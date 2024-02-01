import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './blog.css'

import BugerImg from './firstCardImg.jpg'

function Blog() {
  return (
    <>
        <Container>
            <Card>
                <Card.Img variant="top" src={BugerImg} />
            </Card>    
        </Container> 
    </>
  )
}

export default Blog
