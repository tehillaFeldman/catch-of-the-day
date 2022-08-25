import React, { Component, Fragment } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
class App extends Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    // first reninstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    console.log(localStorageRef);
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }
  // invoked immedietly after update occurs to load data to local storage
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
    console.log('updated');
  }

  // to prevent memory leak undo what has been mounted
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // take a copy of existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes: fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //take copy of state
    const order = { ...this.state.order };
    //Add to order or update qty
    order[key] = order[key] + 1 || 1;
    //Call setState to update state
    this.setState({ order });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
