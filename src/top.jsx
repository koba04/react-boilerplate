/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>TopPage</h1>
        </header>
        <div>nav</div>
        <article>
          <p>Please select artist or country</p>
        </article>
        <div>footer</div>
      </div>
    );
  }
});

