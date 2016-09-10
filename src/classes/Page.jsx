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
  get eventID() { return Utils.eventID(this.html) }
  get canonicalURL() { return Utils.canonicalURL(this.html) }
  get isParsed() { return !!this.html }
  get title() { return this.dom.querySelector("title").innerHTML }

  find(...args) {
    return this.dom.querySelectorAll(args)
  }

  findFirst(...args) {
    return this.dom.querySelector(args)
  }

  prepend(component, selector) {
    return Utils.insertComponentBefore(component, selector, this.dom)
  }
}
