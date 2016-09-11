
import React from 'react'
import Utils from './classes/Utils.js'
import Page from './classes/Page.jsx'
import { createStore } from 'redux'

import FollowEventButton from './components/FollowEvent/FollowEventButton.jsx';
import FollowEventList from './components/FollowEvent/FollowEventList.jsx';

let css = require('./config/injected.css.js');
let currentPage = new Page();

// Inject some global CSS into the page
Utils.injectCSS(css)

// -- Reducers -----------------------------------------------------------------
import rFollowEvent from './reducers/rFollowEvent';
let sFollowEvent = createStore(rFollowEvent);

// -- Component injection ------------------------------------------------------
// currentPage.prepend(FollowEventList, "#page #content");

if (currentPage.isEvent) {
  currentPage.prepend(<FollowEventButton store={ sFollowEvent } />, "#page #content");
}
