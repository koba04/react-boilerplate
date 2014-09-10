/** @jsx React.DOM */

require('insert-css')(require('./tracks.styl'));

var React = require('react');

module.exports = React.createClass({
  propTypes: {
    tracks: React.PropTypes.array.isRequired
  },
  render() {
    var tracks = this.props.tracks.map( (track, index) => {
      return (
        <li className="list-group-item">
          <span className="label label-info">{index+1}</span>
          <a href="{track.url}" target="_blank"><span className="track">{track.name}</span></a>
          <span className="artist">{track.artist.name}</span>
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

