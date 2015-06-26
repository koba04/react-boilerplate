import request from 'superagent';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {
  RECEIVE_TRACKS_BY_ARTIST,
  RECEIVE_TRACKS_BY_COUNTRY
} from '../constants/AppConstants';

const urlRoot = 'http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&';

/**
 * fetch tracks by artist using LastFM API
 * @param {string} artist artist name
 * @emits {RECEIVE_TRACKS_BY_ARTIST}
 */
export function fetchByArtist(artist) {
  request.get(`${urlRoot}method=artist.gettoptracks&artist=${encodeURIComponent(artist)}`)
  .end((err, res) => {
    if (err) return console.log(err);
    AppDispatcher.dispatch({
      type: RECEIVE_TRACKS_BY_ARTIST,
      tracks: res.body.toptracks.track
    });
  });
}

/**
 * fetch tracks by country using LastFM API
 * @param {string} country country name
 * @emits {RECEIVE_TRACKS_BY_COUNTRY}
 */
export function fetchByCountry(country) {
  request.get(`${urlRoot}method=geo.gettoptracks&country=${encodeURIComponent(country)}`)
  .end((err, res) => {
    if (err) return console.log(err);
    AppDispatcher.dispatch({
      type: RECEIVE_TRACKS_BY_COUNTRY,
      tracks: res.body.toptracks.track
    });
  });
}
