import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid custom-container-fluid">
          <Header />
          <Hero />
          <About />   
        </div>
      </div>
    )
  }
}

export default App
