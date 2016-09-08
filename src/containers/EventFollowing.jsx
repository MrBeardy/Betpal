
let $ = require('jquery');
import React from 'react';

import Utils from '../utils';

import FootballEventSerializer from '../serializers/events/football.jsx'

class EventFollowing extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.titles = {
      follow: "Follow this event",
      unfollow: "Stop following",
      working: "I'm on it..."
    }

    this.state = {
      following: false,
      working: false
    }

    console.log(FootballEventSerializer.homeTeam);
  }

  get styles() {
    return {
      container: {
        display: "block",
        textAlign: "right",
      },
      button: {
        padding: "10px",
        display: "inline-block",
        fontSize: "20px",
        padding: "5px 20px",
        opacity: this.state.working ? '0.3' : (this.state.following ? '0.5' : '1.0'),
        cursor: this.state.working ? 'default' : 'pointer'
      }
    }
  }

  get title() {
    if (this.state.working) {
      return this.titles.working;
    } else if (this.state.following) {
      return this.titles.unfollow;
    } else {
      return this.titles.follow;
    }
  }

  onClick() {
    this.setState({
      working: true
    })
  }

  render() {
    return (
      <div style={ this.styles.container }>
        <h3 onClick={ this.onClick } style={ this.styles.button } className="banner">{ this.title }</h3>
      </div>
    )
  }
};

if (Utils.isEventPage) {
  Utils.injectComponent(EventFollowing, "#page #content")
}
