var request = require('superagent'),
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants  = require('../constants/AppConstants')
;

var ActionTypes = AppConstants.ActionTypes;
var urlRoot = "http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&";

// TODO Loading
module.exports = {
  fetchByArtist: function(artist) {
    request.get(
      urlRoot + 'method=artist.gettoptracks&artist=' + encodeURIComponent(artist),
      function(res) {
        AppDispatcher.handleViewAction({
          type: ActionTypes.RECEIVE_TRACKS_BY_ARTIST,
          tracks: res.body.toptracks.track
        });
      }.bind(this)
    );
  },
  fetchByCountry: function(country) {
    request.get(
      urlRoot + 'method=geo.gettoptracks&country=' + encodeURIComponent(country),
      function(res) {
        AppDispatcher.handleViewAction({
          type: ActionTypes.RECEIVE_TRACKS_BY_ARTIST,
          tracks: res.body.toptracks.track
        });
      }.bind(this)
    );
  }
};
