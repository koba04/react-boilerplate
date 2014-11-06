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
  render() {
    return (
      <div className="country">
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="country" />
        <article className="main-content">
          <SelectCountry />
          <Tracks />
        </article>
        <Footer />
      </div>
    );
  }
});
