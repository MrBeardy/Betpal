let $ = require('jquery');

export default class FootballEventSerializer {
  static get fullTimeResultElement() {
    return $(".mkt.three-col:first")
  }

  static get homeTeam() {
    return this.fullTimeResultElement.find(".oc-desc:first").text();
  }

  static get awayTeam() {
    return this.fullTimeResultElement.find(".oc-desc:last").text();
  }
}
