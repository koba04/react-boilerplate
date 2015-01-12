'use strict';

import keyMirror from 'react/lib/keyMirror';

var AppConstants = {
  ActionTypes: keyMirror({
    RECEIVE_TRACKS_BY_ARTIST: null,
    RECEIVE_TRACKS_BY_COUNTRY: null
  }),
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
};

export default AppConstants;
