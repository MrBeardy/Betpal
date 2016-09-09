import React from 'react';
import ToggleButton from '../components/ToggleButton.jsx'
import Page from '../classes/Page.jsx'

export default class FollowEventButton extends React.Component {
  constructor(props) {
    super(props)

    this.buttonClicked = this.buttonClicked.bind(this);

    this.currentPage = new Page();
    this.busy = false;

    this.state = {
      following: false
    }

    this.updateStateFromStore();
  }

  // Storage

  get storageKey() {
    return `followEvent-${ this.currentPage.eventID }`
  }

  updateStateFromStore() {
    chrome.storage.sync.get(this.storageKey, (store) => {
      if (store.hasOwnProperty(this.storageKey)) {
        this.setState({
          following: true
        })
      }
    });
  }

  follow() {
    let self = this;
    let o = {};
    o[this.storageKey] = true;

    chrome.storage.sync.set(o, function() {
      self.setState({
        following: true
      })
    })
  }

  unfollow() {
    let self = this;

    chrome.storage.sync.remove(this.storageKey, function() {
      self.setState({
        following: false
      })
    });
  }

  toggleFollowing() {
    if (this.state.following) {
      this.unfollow();
    } else {
      this.follow();
    }
  }

  // Storage

  get styles() {
    return {
      container: {
        display: "block",
        textAlign: "right",
      }
    }
  }

  buttonClicked(button) {
    this.toggleFollowing();
  }

  render() {
    return (
      <div style={ this.styles.container }>
        <ToggleButton
          onClick={ this.buttonClicked }
          titleDefault={ 'Follow this event' }
          titleClicked={ 'Stop following' }
          clicked={ this.state.following }
        />
      </div>
    )
  }
}
