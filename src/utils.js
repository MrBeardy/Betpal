let $ = require('jquery');
import React from 'react';
import { render } from 'react-dom';

export default class Utils {
  static get isEventPage() {
    return !!$('.event-title.sub-head').length
  }

  static get eventID() {
    if (this.isEventPage) {
      return document.location.href.split("/").pop();
    }
  }

  static get eventType() {
    if (this.isEventPage) {
      let url = document.location.href;

      // TODO: Replace this with a regex search?
      if (url.include("football")) {
        return "football"
      }
    }
  }

  static injectComponent(component, selector, element = "div") {
    let mountNode = document.createElement(element);
    render(React.createElement(component),  mountNode);

    if (selector) {
      $(selector).prepend(mountNode);
    }

    return mountNode;
  }
}
