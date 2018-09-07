import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './About.css'

const About = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <ScrollableAnchor id={'about'}>
        <h2 className="text-center mb-5">About</h2>
      </ScrollableAnchor>
      <div className="row">
        <div className="col-md-4 text-center">
          <img className="img-fluid w-75 mb-3" src="fast.png" alt="fast" />
          <h3>Fast</h3>
          <p>Type as fast as you can.</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-75 mb-3"
            src="correct.png"
            alt="correct"
          />
          <h3>Correct</h3>
          <p>Not only fast, but also correct.</p>
        </div>
        <div className="col-md-4 text-center">
          <img className="img-fluid w-75 mb-3" src="trophy.png" alt="trophy" />
          <h3>Prize</h3>
          <p>Win the contest and get the prize.</p>
        </div>
      </div>
    </div>
  )
}

export default About
