// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    result: 'heads',
  }

  toss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        result: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        result: 'tails',
      }))
    }
  }

  coinImg = () => {
    const {result} = this.state
    if (result === 'heads') {
      return (
        <img
          alt="toss result"
          className="TossImg"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        />
      )
    }

    return (
      <img
        alt="toss result"
        className="TossImg"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
      />
    )
  }

  render() {
    const {total, heads, tails, result} = this.state

    return (
      <div className="bgContainer">
        <div className="Container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {this.coinImg()}
          <div className="btnContainer">
            {' '}
            <button className="btn" onClick={this.toss}>
              Toss Coin
            </button>
          </div>
          <div className="countContainer">
            <p className="tossCount">Total : {total}</p>
            <p className="tossCount">Heads : {heads}</p>
            <p className="tossCount">Tails : {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
