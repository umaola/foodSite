import React from 'react'
import chicken from './chicken.jpg'
import Button from '../button/Button'

import './menu.css'


function Menu(props) {
  const buttonCaps  = 'BUY NOW';

  return (
    <>
      <div className='foodMenu'>
            <div className="menu-text">
                <div className="menu-heading">
                    <h3>{props.foodAvailable}</h3>
                    <h4>${props.foodPrice}</h4>
                </div>
                <div className="menu-bodyText">
                    <p>Lorem Ipsum available, but the majority have suffered alteration insome form, by injected humour, or randomised words which don'tlook even slightly believable. If you are going to use a passageof Lorem Ipsum, you need to be sure</p>
                    <Button buttonText = {buttonCaps} className="foodMenu-button"/>
                </div>
            </div>
            <div className="menu-img">
                <img src={props.foodImage} alt='Image position'/>
            </div>
      </div>
    </>
  )
}

export default Menu;
