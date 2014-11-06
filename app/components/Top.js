if (typeof window !== "undefined") {
  require('insert-css')(require('./Top.styl'));
}

var React = require('react'),
    Nav   = require('./Nav'),
    Footer  = require('./Footer')
;

module.exports = React.createClass({
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

