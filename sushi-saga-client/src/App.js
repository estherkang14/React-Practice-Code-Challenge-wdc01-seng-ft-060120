import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Search from './components/Search';
import Bank from './components/Bank';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushiData: [],
      index: 0,
      moneyRemaining: 100,
      eatenSushi: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiData => this.setState({ sushiData }))
  }

  render() {
    return (
      <div className="app">
        <Bank withdrawMoney={this.withdrawMoney} />
        
        <Search sushiSearch={this.sushiSearch} />
        

        <SushiContainer  
          fourItems={this.display4Sushi(this.filterSushi())}
          next4Sushi={this.next4Sushi}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi} />

        <Table eatenSushi={this.state.eatenSushi} 
          moneyRemaining={this.state.moneyRemaining} />
      </div>
    );
  }

  display4Sushi = (sushi) => {
    let index = this.state.index
    
    return sushi.slice(index, index + 4)
  }

  next4Sushi = () => {
    let newIndex = this.state.index
    newIndex += 4
    if (newIndex >= this.state.sushiData.length) {
      newIndex = 0 }

    this.setState({ index: newIndex })
  }

  eatSushi = (sushi) => {
    let money = this.state.moneyRemaining
    if (money >= sushi.price) {
      let eaten = [...this.state.eatenSushi]
      if (!eaten.includes(sushi.id)) {
        eaten.push(sushi.id)
        this.setState({
          eatenSushi: eaten,
          moneyRemaining: money - sushi.price
        })
      } 
    } else {
      alert("You don't have enough money :(")
    }
  }

  sushiSearch = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  filterSushi = () => {
    let filteredSushi = [...this.state.sushiData]
    let search = this.state.search
    let index = this.state.index 
    if ( search !== '' ) {
      filteredSushi = filteredSushi.filter( sushi => sushi.name.toLowerCase().includes(search.toLowerCase())
      || sushi.price <= parseInt(search, 10))
    }

    return filteredSushi
  }
  
  withdrawMoney = (e) => {
    e.preventDefault()
    let amt = parseInt(e.target.withdrawal.value, 10) + this.state.moneyRemaining 

    this.setState({
      moneyRemaining: amt
    })
  }
}

export default App;