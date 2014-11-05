var React   = require('react'),
    tracks = require('./tracks')
;

module.exports = {
  getInitialState() {
    return {
      tracks: []
    };
  },
  componentWillMount() {
    this.tracks = tracks;
    tracks.on("all", this.setTracks);
  },
  componentWillUnmount() {
    tracks.off("all", this.setTracks);
  },
  setTracks() {
    if (this.isMounted()) {
      this.setState({
        tracks: tracks.map( (track) => { return track.attributes } )
      });
    }
  },
};
