import React from 'react'
import './aboutus.css'

function Aboutus(props) {
  return (
    <>
      <div className="about-us">
            <div className="background-text"><h1>{props.backgroundText}</h1></div>
            <div className="about-text">
                <h3>{props.heading}</h3>
                <p>Lorem Ipsum available, but the majority have suffered alteration<br/>in some form by injected humour</p>
            </div>
      </div>
    </>
  )
}

export default Aboutus
