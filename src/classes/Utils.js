import React from 'react';
import { render } from 'react-dom';

export default class Utils {
  static isEvent(html) {
    return this.elementExists('.event-title.sub-head', html)
  }

  static isLiveEvent(html) {
    return this.elementExists('.live-betting', html);
  }

  static elementExists(selector, html) {
    return !!this.documentOrElement(html).querySelector(selector)
  }

  static documentOrElement(html) {
    if (html) {
      return this.elementFromHTML(html)
    } else {
      return document;
    }
  }

  static elementFromHTML(html) {
    let element = document.createElement("div")
    element.innerHTML = html;
    return element
  }

  static renderComponent(component, wrapperElement = "div") {
    let element = document.createElement(wrapperElement);

    render(React.createElement(component), element);

    return element;
  }

  static insertComponentBefore(component, selector, dom = document) {
    let mountSource = dom.querySelector(selector)
    let element = this.renderComponent(component);

    mountSource.insertBefore(element, mountSource.firstChild);

    return element;
  }
}
