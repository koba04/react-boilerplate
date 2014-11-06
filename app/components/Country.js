if (typeof window !== "undefined") {
  require('insert-css')(require('./Country.styl'));
}

var React         = require('react'),
    Nav           = require('./Nav'),
    Footer        = require('./Footer'),
    SelectCountry = require('./SelectCountry'),
    Tracks        = require('./Tracks'),
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
      <div className="country">
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="country" />
        <article className="main-content">
          <SelectCountry />
          <Tracks tracks={this.state.tracks} />
        </article>
        <Footer />
      </div>
    );
  }
});
