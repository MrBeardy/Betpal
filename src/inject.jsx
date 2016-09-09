import Utils from './classes/Utils.js'
import Page from './classes/Page.jsx'

import FollowEventButton from './containers/FollowEventButton.jsx';

// -----------------------------------------------------------------------------

// Initialize the current page and go through adding all of the containers

let currentPage = new Page();

if (currentPage.isEvent) {
  currentPage.insertBefore(FollowEventButton, "#page #content")
}
