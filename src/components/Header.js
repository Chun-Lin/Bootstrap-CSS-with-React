import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a href="#" className="navbar-brand h1">
          Typeed
        </a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Prize
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
