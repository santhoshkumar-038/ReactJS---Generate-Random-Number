// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const getRandomNumber = this.generateRandomNumber()
    this.setState({randomNumber: getRandomNumber})
    console.log(getRandomNumber)
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-number-generator-container">
        <div className="app-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onClickButton} type="button">
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
