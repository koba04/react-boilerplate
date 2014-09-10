/** @jsx React.DOM */

require('insert-css')(require('./country.styl'));

var React         = require('react'),
    Nav           = require('./nav.jsx'),
    Footer        = require('./footer.jsx'),
    SelectCountry = require('./select-country.jsx'),
    Tracks        = require('./tracks.jsx'),
    request       = require('superagent')
;

module.exports = React.createClass({
  getInitialState() {
    return {
      tracks: []
    };
  },
  fetchTopTracks(country) {
    request.get(
      "http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&method=geo.gettoptracks&country=" + encodeURIComponent(country),
      (res) => {
        this.setState({tracks: res.body.toptracks.track});
      }
    );
  },
  render() {
    return (
      <div className="country">
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="country" />
        <article className="main-content">
          <SelectCountry onHandleSubmit={this.fetchTopTracks} />
          <Tracks tracks={this.state.tracks} />
        </article>
        <Footer />
      </div>
    );
  }
});
