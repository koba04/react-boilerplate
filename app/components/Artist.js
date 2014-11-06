if (typeof window !== "undefined") {
  require('insert-css')(require('./Artist.styl'));
}

var React       = require('react'),
    Nav         = require('./Nav'),
    Footer      = require('./Footer'),
    InputArtist = require('./InputArtist'),
    Tracks      = require('./Tracks'),
    TrackStore  = require('../stores/TrackStore')
;

module.exports = React.createClass({
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

