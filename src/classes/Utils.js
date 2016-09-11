import React from 'react';
import { render } from 'react-dom';

let _ = require('lodash');
export default class Utils {
  // Storage
  static storageKeysByPrefix(prefix, callback) {
    chrome.storage.sync.get(null, function(items) {
      callback(_.pickBy(items, (v,k) => {
        return _.startsWith(k, prefix);
      }))
    })
  }

  // Page
  static canonicalURL(html) {
    return this.documentOrElement(html).querySelector("link[rel='canonical']").getAttribute("href")
  }

  static isEvent(html) {
    return this.canonicalURL(html).includes("event")
  }

  static isLiveEvent(html) {
    return this.elementExists('.live-betting', html);
  }

  static elementExists(selector, html) {
    return !!this.documentOrElement(html).querySelector(selector)
  }

  static eventID(html) {
    return this.canonicalURL(html).split("/").pop();
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

    render(component, element);

    return element;
  }

  static insertComponentBefore(component, selector, dom = document) {
    let mountSource = dom.querySelector(selector)
    let element = this.renderComponent(component);

    mountSource.insertBefore(element, mountSource.firstChild);

    return element;
  }

  static injectCSS(css) {
    let element = document.createElement("style");
    element.innerHTML = css;

    document.head.insertBefore(element, document.head.firstChild);
  }
}
