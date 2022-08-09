import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    console.log('mounted');
  }
  addFish = (fish) => {
    // take a copy of existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes: fishes });
  };
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
