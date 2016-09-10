import React from 'react';
import ToggleButton from '../../components/ToggleButton.jsx'
import Page from '../../classes/Page.jsx'
import Utils from '../../classes/Utils'

let globals = require('../../config/globals')

export default class FollowEventButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      following: false
    }

    this.currentPage = new Page();
    this.buttonClicked = this.buttonClicked.bind(this);

    this.updateStateFromStore();
  }

  // Storage

  get storageKey() {
    return globals.storagePrefixes.followEvent + this.currentPage.eventID
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

  get storageValues() {
    return {
      title: this.currentPage.title,
      url: this.currentPage.canonicalURL
    }
  }

  follow() {
    let self = this;

    chrome.storage.sync.set({ [this.storageKey]: this.storageValues }, function() {
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
