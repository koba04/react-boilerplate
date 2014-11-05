if (typeof window !== "undefined") {
  require('insert-css')(require('./artist.styl'));
}

var React       = require('react'),
    Nav         = require('./nav'),
    Footer      = require('./footer'),
    InputArtist = require('./input-artist'),
    Tracks      = require('./tracks'),
    TracksMixin = require('../tracks-mixin')
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

