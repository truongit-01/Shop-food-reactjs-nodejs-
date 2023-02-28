import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <>
      <div className="header_home">
        <p className='main Title' style={{ fontSize: "60px", color: '#fff', height: '520px' }}>mamyka</p>

        <ul className='sponsor'>
          <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-23.svg' /></li>
          <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-21.png' /></li>
          <li style={{ border: '3px solid #fff', borderRadius: '50%' }}><img style={{ marginTop: '18px' }} src='https://mamuka.rest/local/templates/general/images/main-slider-aura.png' /></li>
          <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-22.png' /></li>
        </ul>

        <div className="Box_go_menu">
          <div className="food">
            <p style={{ fontSize: "30px" }}>Food Menu</p>
            <Link to="/shop">   <p>{">>>>>"}</p></Link>
            <img className='image' src="https://mamuka.rest/local/templates/general/images/main-slider-card-2.png" />
          </div>

          <div className="drink">
            <p style={{ fontSize: "30px", color: '#fff' }}>Drink Menu</p>
            <Link to="/shop">   <p>{">>>>>"}</p></Link>
            <img className='image' src="https://mamuka.rest/local/templates/general/images/main-slider-card-1.png" />
          </div>
        </div>
      </div>
    </>
  )
}
