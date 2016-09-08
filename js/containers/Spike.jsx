
let $ = require('jquery');
import React from 'react';

import Utils from '../utils';

class Spike extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.syncStoreCounter = this.syncStoreCounter.bind(this);

    this.state = {
      counter: 1
    }

    this.syncGetCounter();
  }

  resetTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    return setTimeout(this.syncStoreCounter, 500)
  }

  syncGetCounter() {
    chrome.storage.sync.get("counter", (store) => {
      if (store && store.counter) {
        this.setState({
          counter: store.counter
        })
      }
    });
  }

  syncStoreCounter() {
    chrome.storage.sync.set({ "counter": this.state.counter })

    debugger;
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });

    this.timer = this.resetTimer();
  }

  render() {
    return <h1 onClick={ this.tick }>Counter: { this.state.counter }</h1>
  }
};

if (Utils.isBettingPage()) {
  Utils.injectComponent(Spike, "#page")
}
