/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-pills nav-justified">
        <li><a href="#artist">Atrist</a></li>
        <li><a href="#country">Country</a></li>
      </ul>
    );
  }
});

