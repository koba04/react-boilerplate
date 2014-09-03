/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-pills nav-justified">
        <li><Router.Link to="artist">Artist</Router.Link></li>
        <li><Router.Link to="country">Country</Router.Link></li>
      </ul>
    );
  }
});

