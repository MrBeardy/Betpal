let $ = require('jquery');

import React from 'react';
import { render } from 'react-dom';

class Spike extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = {
      counter: 1
    }
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return <h1 onClick={ this.tick }>Counter: { this.state.counter }</h1>
  }
};

let mountNode = document.createElement("div");
render(<Spike />,  mountNode);
$("#page #content .hero").before(mountNode);
