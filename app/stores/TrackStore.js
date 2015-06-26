import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {
  RECEIVE_TRACKS_BY_ARTIST,
  RECEIVE_TRACKS_BY_COUNTRY
} from '../constants/AppConstants';

const CHANGE_EVENT = 'change';
let tracks = [];

/**
 * track store
 */
class TrackStore extends EventEmitter {
  /**
   * constructor
   */
  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register( action => {
      switch (action.type) {
        case RECEIVE_TRACKS_BY_ARTIST:
          tracks = action.tracks;
          this.emitChange();
          break;
        case RECEIVE_TRACKS_BY_COUNTRY:
          tracks = action.tracks;
          this.emitChange();
          break;
      }
    });
  }
  /**
   * @emit change event
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * listen change event
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * remove listened change event
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  /**
   * return all tracks
   * @return {array} all tracks
   */
  getAll() {
    return tracks;
  }
}

export default new TrackStore();
