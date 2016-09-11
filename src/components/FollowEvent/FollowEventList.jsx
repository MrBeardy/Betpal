import React from 'react';

import Page from '../../classes/Page.jsx'
import Utils from '../../classes/Utils'

let globals = require('../../config/globals');
let _ = require('lodash');

export default class FollowEventList extends React.Component {
  constructor(props) {
    super(props)

    this.currentPage = new Page();

    this.state = {
      items: []
    }

    self = this;

    chrome.storage.onChanged.addListener(function(changes, namespace) {
      _.each(changes, (v, k) => {
        if (_.startsWith(k, globals.storagePrefixes.followEvent)) {
          self.updateStateFromStorage()
        }
      });
    });

    this.updateStateFromStorage()
  }

  updateStateFromStorage() {
    Utils.storageKeysByPrefix(globals.storagePrefixes.followEvent, (items) => {
      let _items = _.map(items, (item, key) => {
        return Object.assign(item, {id: key})
      });

      this.setState({
        items: _items
      })
    })
  }

  // TODO: This duplicates some code in FollowEventButton, see inject.jsx
  //       for a TODO on fixing this.
  unfollow(id) {
    chrome.storage.sync.remove(id, () => {});
  }

  render() {
    let itemElements = _.map(this.state.items, (item) => {
      return (
        <li key={ item.id } >
          <button onClick={ () => { this.unfollow(item.id) } }>[unfollow]</button> <a href={ item.url }>{ item.title }</a>
        </li>
      )
    })

    return (
      <div className='bp-followed-events-list'>
        <div>
          <h1>Followed events</h1>
          <hr />
          <ul>
            { itemElements }
          </ul>
          <hr />
        </div>
      </div>
    )
  }
}
