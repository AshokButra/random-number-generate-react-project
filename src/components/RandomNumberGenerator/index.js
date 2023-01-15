import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomValue = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: randomValue,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomValue}
          >
            Generate
          </button>
          <h1 className="random-number">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
