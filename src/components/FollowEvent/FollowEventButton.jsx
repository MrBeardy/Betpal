import React from 'react';
import Page from '../../classes/Page.jsx'
import Utils from '../../classes/Utils'

let globals = require('../../config/globals')

export default class FollowEventButton extends React.Component {
  constructor(props) {
    super(props)

    this.currentPage = new Page();

    this.follow = this.follow.bind(this)
    this.unfollow = this.unfollow.bind(this)
    this.forceUpdate = this.forceUpdate.bind(this)

    this.store.subscribe(this.forceUpdate);
  }

  get store() {
    return this.props.store;
  }

  get items() {
    return this.store.getState();
  }

  get id() {
    return this.currentPage.eventID;
  }

  get following() {
    return _.has(this.items, this.id)
  }

  get storageValues() {
    return {
      [this.id]: {
        title: this.currentPage.title,
        url: this.currentPage.canonicalURL
      }
    }
  }

  get message() {
    return !this.following ? "Follow" : 'Un-Follow'
  }

  get styles() {
    return {
      container: {
        display: "block",
        textAlign: "right",
      }
    }
  }

  get action() {
    return !this.following ? this.follow : this.unfollow;
  }

  dispatch(type) {
    this.store.dispatch({
      type: type,
      data: this.storageValues
    })
  }

  sync() {
    this.dispatch('SYNC');
  }

  follow() {
    this.dispatch('ADD')
    this.sync();
  }

  unfollow() {
    this.dispatch('REMOVE')
    this.sync();
  }

  render() {
    return (
      <div style={ this.styles.container }>
        <button onClick={ this.action }>{ this.message } { this.id }</button>
        <ul>
          { _.size(this.items) }
        </ul>
      </div>
    )
  }
}

FollowEventButton.propTypes = {
  store: React.PropTypes.object.isRequired
}
