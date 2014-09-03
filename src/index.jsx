/** @jsx React.DOM */

var React     = require('react'),
    Router    = require('react-router'),
    Top       = require('./top.jsx'),
    Artist    = require('./artist.jsx'),
    Country   = require('./country.jsx')
;

var App = React.createClass({
  render: function() {
    return (
      <Router.Routes>
        <Router.Route name="top"      handler={Top}     path="/" />
        <Router.Route name="artist"   handler={Artist}           />
        <Router.Route name="country"  handler={Country}          />
      </Router.Routes>
    );
  }
});

React.renderComponent(<App />, document.getElementById("app"));
