/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-pills nav-justified">
        <li><Link to="artist">Artist</Link></li>
        <li><Link to="country">Country</Link></li>
      </ul>
    );
  }
});

