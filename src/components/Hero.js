import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './Hero.css'

const Hero = () => {
  return (
    <ScrollableAnchor id={'home'}>
      <div className="container-fluid">
        <div className="row">
          <div className="hero-image">
            <div className="hero-text text-center">
              <div className="h1">Let's Type</div>
              <p className="caption mb-5">
                This is a typing contest. Type fast and correct to get good
                prize.
              </p>
              <button className="btn btn-lg btn-info">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Hero
