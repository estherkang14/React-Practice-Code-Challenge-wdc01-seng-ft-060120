import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushiData: [],
      fourItems: [],
      remainingSushi: [],
      chosenSushi: {},
      moneyRemaining: 100,
      eatenSushi: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiData => this.setState({ sushiData, fourItems: sushiData.slice(0, 4), remainingSushi: sushiData }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.state.remainingSushi} 
        fourItems={this.state.fourItems}
        nextFour={this.nextFourSushis}
        chooseSushi={this.chooseSushi}
        moneyRemaining={this.state.moneyRemaining}
        sushiAlert={this.sushiAlert}/>
        <Table eatenSushi={this.state.eatenSushi} moneyRemaining={this.state.moneyRemaining}/>
      </div>
    );
  }

  nextFourSushis = () => {
    let four = this.state.remainingSushi.splice(0, 4)
    let updatedRemaining = this.state.remainingSushi 
    let newestFour = this.state.remainingSushi.slice(0, 4)
    this.setState({
      fourItems: newestFour,
      remainingSushi: updatedRemaining
    })
  }

  chooseSushi = (sushi) => {
    let eatSushi = {...sushi, clicked: true}
    let ogFour = this.state.fourItems
    let money = this.state.moneyRemaining
    this.setState({
      chosenSushi: eatSushi,
      fourItems: ogFour.map(sushi => { if (sushi.id === eatSushi.id) {
        return eatSushi
      } else {
        return sushi
      }
      }),
      eatenSushi: [...this.state.eatenSushi, eatSushi],
      moneyRemaining: money - eatSushi.price
    }, () => console.log(eatSushi))
  }

  sushiAlert = () => {
    alert("Sorry! You don't have enough money :(")
  }
}

export default App;