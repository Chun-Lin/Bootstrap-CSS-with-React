import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

const Footer = () => {
  return (
    <ScrollableAnchor id={'contact'}>
      <div className="container-fluid">
        <div className="row bg-dark text-center">
          <div className="col-md-3" />
          <div className="col-md-6 text-light mt-3">
            <h2 className="mb-3">Happy Typing!</h2>
            <p>Tel: (888)888-8888</p>
            <p>E-mail: xxxxx@gmail.com</p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Footer
