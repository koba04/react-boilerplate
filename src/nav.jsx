/** @jsx React.DOM */

require('insert-css')(require('./nav.styl'));

var React = require('react/addons');
var Link = require('react-router').Link;

module.exports = React.createClass({
  propTypes: {
    current: React.PropTypes.string
  },
  render: function() {
    var artistClassName = React.addons.classSet({
      active: this.props.current === "artist"
    });
    var countryClassName = React.addons.classSet({
      active: this.props.current === "country"
    });
    return (
      <div className="nav-content">
        <ul className="nav nav-pills nav-justified">
          <li className={artistClassName}><Link to="artist">Artist</Link></li>
          <li className={countryClassName}><Link to="country">Country</Link></li>
        </ul>
      </div>
    );
  }
});

