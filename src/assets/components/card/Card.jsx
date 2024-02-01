import React from 'react'
import Cardbutton from '../cardbutton/Cardbutton'
import './card.css'



function Card(props) {

  return (
    
    <>
        <div className='pricing-card'>
            <div className="card-head">
                <h5>{props.package}</h5>
                <h4>${props.packagePrice}</h4>
            </div>
            <div className="card-body">
                <ul>
                    <li>6 Pis Chicken</li>
                    <li>3 Pis Chicken</li>
                    <li>2 Pis Burger</li>
                </ul>
                <Cardbutton/>
            </div>
        </div>
    </>
  )
}

export default Card
