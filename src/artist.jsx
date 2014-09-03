/** @jsx React.DOM */

var React   = require('react'),
    Nav     = require('./nav.jsx'),
    Footer  = require('./footer.jsx')
;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>Artist Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav />
        <article className="main-content">
          <div>input-artist</div>
          <div>tracks</div>
        </article>
        <Footer />
      </div>
    );
  }
});

