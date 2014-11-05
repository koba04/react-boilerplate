var Backbone = require('backbone'),
    request = require('superagent')
;

var Tracks = Backbone.Collection.extend({
  urlRoot: "http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&",
  countries: ['Japan', 'United States', 'United Kingdom'],
  fetchByArtist(artist) {
    request.get(
      `${this.urlRoot}method=artist.gettoptracks&artist=${encodeURIComponent(artist)}`,
      (res) => { this.reset(res.body.toptracks.track); }
    );
  },
  fetchByCountry(country) {
    request.get(
      `${this.urlRoot}method=geo.gettoptracks&country=${encodeURIComponent(country)}`,
      (res) => { this.reset(res.body.toptracks.track); }
    );
  }
})
module.exports = new Tracks();

