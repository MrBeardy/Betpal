let $ = require('jquery');
import React from 'react';
import { render } from 'react-dom';

export default class Utils {
  static isBettingPage() {
    return !!$('.event-title.sub-head').length
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
