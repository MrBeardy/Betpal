import Utils from './classes/Utils.js'
import Page from './classes/Page.jsx'

import FollowEventButton from './containers/FollowEvent/FollowEventButton.jsx';
import FollowEventList from './containers/FollowEvent/FollowEventList.jsx';

let css = require('./config/injected.css.js');

// -----------------------------------------------------------------------------

// Initialize the current page and go through adding all of the containers
let currentPage = new Page();

// Inject some global CSS into the page
Utils.injectCSS(css)

currentPage.prepend(FollowEventList, "#page #content");

if (currentPage.isEvent) {
  currentPage.prepend(FollowEventButton, "#page #content");
}
