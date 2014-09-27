/** @jsx React.DOM */

if (typeof window !== "undefined") {
  require('insert-css')(require('./top.styl'));
}

var React   = require('react'),
    Nav     = require('./nav.jsx'),
    Footer  = require('./footer.jsx'),
    SetTitleMixin = require('../set-title-mixin.jsx')
;

module.exports = React.createClass({
  mixins: [SetTitleMixin],
  render() {
    return (
      <div className="top">
        <header className="page-header">
          <h1>TopPage</h1>
        </header>
        <Nav />
        <article>
          <p>Please select artist or country</p>
        </article>
        <Footer />
      </div>
    );
  }
});

