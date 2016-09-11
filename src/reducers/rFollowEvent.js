let _ = require('lodash')
let store = require('store')

let globals = require('../config/globals')

const STORAGE_KEY = globals.storage.followEvent;

export default function rFollowEvent(state = {}, action) {
  switch(action.type) {
    case 'ADD':
      return Object.assign(
        state,
        action.data
      )
    case 'REMOVE':
      let id = _.first(_.keys(action.data));

      return _.pickBy(state, (v, k) => k != id)
    case 'SYNC':
      return store.set(STORAGE_KEY, state)
    default:
      let stored = _.pickBy(store.get(STORAGE_KEY), _.identity);

      return _.isPlainObject(stored) ? stored : state;
  }
}
