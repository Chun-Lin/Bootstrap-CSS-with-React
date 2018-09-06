import React, { Component } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Competitor from './components/Competitor'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Hero />
          </div>
          <div className="row">
            <About />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Competitor />
          </div>
        </div>
      </div>
    )
  }
}

export default App
