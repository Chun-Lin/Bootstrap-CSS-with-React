import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './Competitor.css'

class Competitor extends React.Component {
  state = {
    competitors: [
      {
        name: 'Andy Wasabulu',
        img: 'first-competitor.jpg',
        description:
          'I have 10 years experience of typing. The winner will definitely be me!',
      },
      {
        name: 'Blue Kakaroto',
        img: 'second-competitor.jpg',
        description:
          "I'm a programmer, I am always with my keyboard. Don't underestimate me!",
      },
    ],
  }

  render() {
    const { competitors } = this.state
    console.log(competitors)
    return (
      <ScrollableAnchor id={'competitors'}>
        <div className="container mb-5">
          <h2 className="text-center mb-3">Competitors</h2>
          <div className="row">
            {this.state.competitors.map(competitor => (
              <div className="col-md-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={competitor.img}
                    alt="competitor"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{competitor.name}</h5>
                    <p className="card-text">{competitor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Competitor
