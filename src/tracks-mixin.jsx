/** @jsx React.DOM */

var tracks = require('./tracks');

module.exports = {
  componentWillMount() {
    this.tracks = tracks;
    this.setState({ tracks: [] });
    tracks.on("all", this.setTracks);
  },
  componentWillUnmount() {
    tracks.off("all", this.setTracks);
  },
  setTracks() {
    this.setState({
      tracks: tracks.map( (track) => { return track.attributes } )
    });
  },
};
