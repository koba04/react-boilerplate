import {EventEmitter} from 'events';
import assign         from 'object-assign';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import {
  RECEIVE_TRACKS_BY_ARTIST,
  RECEIVE_TRACKS_BY_COUNTRY
} from '../constants/AppConstants';

const CHANGE_EVENT = 'change';
let tracks = [];

const TrackStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll() {
    return tracks;
  },
});

TrackStore.dispatchToken = AppDispatcher.register( action => {

  switch (action.type) {
    case RECEIVE_TRACKS_BY_ARTIST:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
    case RECEIVE_TRACKS_BY_COUNTRY:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
  }
});

export default TrackStore;
