/** @jsx React.DOM */

require('insert-css')(require('./artist.styl'));

var React       = require('react'),
    Nav         = require('./nav.jsx'),
    Footer      = require('./footer.jsx'),
    InputArtist = require('./input-artist.jsx'),
    Tracks      = require('./tracks.jsx'),
    TracksMixin = require('../tracks-mixin.jsx')
;

module.exports = React.createClass({
  mixins: [TracksMixin],
  fetchArtist(artist) {
    this.tracks.fetchByArtist(artist);
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

