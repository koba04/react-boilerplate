'use strict';

import React      from 'react';
import TrackStore from '../stores/TrackStore';

export default React.createClass({
  displayName: 'Tracks',
  getInitialState() {
    return {
      tracks: TrackStore.getAll(),
    };
  },
  componentDidMount: function() {
    TrackStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TrackStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({ tracks: TrackStore.getAll() });
  },
  render() {
    let style = {
      track: {
        fontSize: 20,
        marginRight: 10
      },
      artist: {
        fontSize: 14,
        marginRight: 10
      }
    };
    let tracks = this.state.tracks.map( (track, index) => {
      return (
        <li className="list-group-item" key={index}>
          <span className="label label-info">{index+1}</span>
          <a href={track.url} target="_blank"><span style={style.track}>{track.name}</span></a>
          <span style={style.artist}>{track.artist.name}</span>
          <small className="listeners glyphicon glyphicon-headphones">{track.listeners}</small>
        </li>
      );
    });
    return (
      <div className="tracks">
        <ul className="list-group">
          {tracks}
        </ul>
      </div>
    );
  }
});
