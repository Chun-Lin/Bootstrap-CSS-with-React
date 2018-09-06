import React from 'react'

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
        description: "I'm a programmer, I always be with my keyboard",
      },
    ],
  }

  render() {
    const { competitors } = this.state
    console.log(competitors)
    return (
      <React.Fragment>
        {this.state.competitors.map(competitor => (
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={competitor.img}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{competitor.name}</h5>
                <p className="card-text">{competitor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default Competitor
