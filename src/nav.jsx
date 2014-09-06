/** @jsx React.DOM */

require('insert-css')(require('./nav.styl'));

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="nav-content">
        <ul className="nav nav-pills nav-justified">
          <li><Link to="artist">Artist</Link></li>
          <li><Link to="country">Country</Link></li>
        </ul>
      </div>
    );
  }
});

