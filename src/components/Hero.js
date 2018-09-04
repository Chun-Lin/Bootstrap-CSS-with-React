import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-image">
      <div className="container mt-5 hero">
        <h1 className="display-3 ">Let's Type!</h1>
        <p className="lead mb-5">
          This is a typing-contest website. Type fast and correct.
        </p>
        <button className="btn-lg btn-primary">Learn More</button>
      </div>
    </div>
  )
}

export default Hero
