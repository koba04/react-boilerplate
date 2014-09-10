/** @jsx React.DOM */

require('insert-css')(require('./artist.styl'));

var React   = require('react'),
    Nav     = require('./nav.jsx'),
    Footer  = require('./footer.jsx'),
    InputArtist = require('./input-artist.jsx'),
    Tracks  = require('./tracks.jsx'),
    request = require('superagent')
;

module.exports = React.createClass({
  getInitialState() {
    return {
      tracks: []
    };
  },
  fetchArtist(artist) {
    request.get(
      "http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&method=artist.gettoptracks&artist=" + artist,
      (res) => {
        this.setState({tracks: res.body.toptracks.track});
      }
    );
  },
  render() {
    return (
      <div className="artist">
        <header className="page-header">
          <h1>Artist Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="artist" />
        <article className="main-content">
          <InputArtist onHandleSubmit={this.fetchArtist} />
          <Tracks tracks={this.state.tracks} />
        </article>
        <Footer />
      </div>
    );
  }
});

