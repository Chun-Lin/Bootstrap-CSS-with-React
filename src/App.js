import React, { Component } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Competitor from './components/Competitor'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Competitor />
        <Footer />
      </div>
    )
  }
}

export default App
