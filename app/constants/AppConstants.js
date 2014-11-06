var keyMirror = require('react/lib/keyMirror');

module.exports = {
  ActionTypes: keyMirror({
    RECEIVE_TRACKS_BY_ARTIST: null,
    RECEIVE_TRACKS_BY_COUNTRY: null
  }),
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
};
