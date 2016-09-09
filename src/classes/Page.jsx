let $ = require('jquery');

import Utils from './Utils.js';

export default class Page {
  constructor(html) {
    this.html = html;
    this.dom = Utils.documentOrElement(this.html)
  }

  static fetch(url, doneCallback) {
    $.ajax(url).done((html) => {
      doneCallback(new Page(html))
    })
  }

  get isEvent() { return Utils.isEvent(this.html) }
  get isLiveEvent() { return Utils.isLiveEvent(this.html) }
  get isParsed() { return !this.html; }

  find(...args) {
    return this.dom.querySelectorAll(args)
  }

  findFirst(...args) {
    return this.dom.querySelector(args)
  }

  insertBefore(component, selector) {
    return Utils.insertComponentBefore(component, selector, this.dom)
  }

  // Event page methods

  get eventID() {
    // TODO: Make this work this parsed pages
    if (this.isEvent && !this.isParsed) {
      return this.dom.location.href.split("/").pop();
    }
  }
}
