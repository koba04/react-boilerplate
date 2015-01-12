'use strict';

import keyMirror from 'react/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    RECEIVE_TRACKS_BY_ARTIST: null,
    RECEIVE_TRACKS_BY_COUNTRY: null
  }),
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
};
