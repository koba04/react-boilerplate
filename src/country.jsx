/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <div>nav</div>
        <article className="main-content">
          <div>select-country</div>
          <div>tracks</div>
        </article>
        <div>footer</div>
      </div>
    );
  }
});
