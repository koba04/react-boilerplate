'use strict';


import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var tracks = [];

var TrackStore = assign({}, EventEmitter.prototype, {

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

TrackStore.dispatchToken = AppDispatcher.register( payload => {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.RECEIVE_TRACKS_BY_ARTIST:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
    case ActionTypes.RECEIVE_TRACKS_BY_COUNTRY:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
  }
});

module.exports = TrackStore;

