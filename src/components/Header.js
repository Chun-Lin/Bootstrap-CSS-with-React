import React from 'react'
import classNames from 'classnames'
class Header extends React.Component {
  state = {
    show: false,
  }

  handleClick = event => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand h1">
            Typeed
          </a>
          <button
            class="navbar-toggler"
            type="button"
            onClick={this.handleClick}
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            className={classNames('collapse', 'navbar-collapse', {
              show: this.state.show,
            })}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={this.handleClick}>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={this.handleClick}>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={this.handleClick}>
                <a href="#competitors" className="nav-link">
                  Competitors
                </a>
              </li>
              <li className="nav-item" onClick={this.handleClick}>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
