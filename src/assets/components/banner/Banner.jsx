import React from 'react'

import './banner.css';
import Button from '../button/Button';

function Banner(props) {
  const buttonCaption  = 'ORDER NOW';
  return (
    <>
      <div className="first-banner">
        <div className="banImg">
          <img src={props.bannerImage} alt='This is banner image'></img>
        </div>
        <div className="banner-text">
            <h1>AMERICAN FOOD</h1>
            <h2>The Best taste Food</h2>
            <hr/>
            <p>Lorem Ipsum available, but the majority havesuffered alteration in some form, by injectedhumour, or randomised words</p>        
            <Button buttonText={buttonCaption} className="banner-button"/>
        </div>
      </div>
    </>
  )
}

export default Banner
