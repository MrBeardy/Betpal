
import React from 'react'
import { render } from 'react-dom'
import Utils from './classes/Utils.js'
import Page from './classes/Page.jsx'
import { createStore } from 'redux'

import FollowEventButton from './components/FollowEvent/FollowEventButton.jsx';
import FollowEventList from './components/FollowEvent/FollowEventList.jsx';

import rFollowEvent from './reducers/rFollowEvent';
let sFollowEvent = createStore(rFollowEvent);

render(<FollowEventButton store={ sFollowEvent } />, document.getElementById('app_container'));
