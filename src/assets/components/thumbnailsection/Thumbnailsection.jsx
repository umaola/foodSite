import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';  
import Img from './img1.jpg';

import './thumbnailsection.css'
import Button from '../button/Button'


function Thumbnailsection() {
  
  const buttonCaps  = 'READ MORE';

  return (
     
    <>
      <Row className='thumb'>
            <div className="body-text">
              <div>
              <h2>Let food be thy medicine<br/>medicine be thy food</h2>
              <p>Lorem Ipsum available, but the majority have sufferedalteration in some form by injected humour randomisewords which don't look even slightly believable. If youare going to use a passageLorem Ipsum, you need to be sure there isn't anythingembarrassing hidden in the middle of text.</p>
              <Button buttonText = {buttonCaps}/>
              </div>
            </div>
            <div className="thumbnail-img">
              <img src={Img} thumbnail className='imagethumbnail'/>
            </div>
      </Row>
    </>                                       
  )
}

export default Thumbnailsection;
