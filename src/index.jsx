/** @jsx React.DOM */

var React     = require('react'),
    Router    = require('react-router'),
    Top       = require('./top.jsx'),
    Artist    = require('./artist.jsx'),
    Country   = require('./country.jsx')
;

var App = React.createClass({
  render: function() {
    var Routes  = Router.Routes,
        Route   = Router.Route
    ;
    return (
      <Routes>
        <Route name="top"      handler={Top}     path="/" />
        <Route name="artist"   handler={Artist}           />
        <Route name="country"  handler={Country}          />
      </Routes>
    );
  }
});

React.renderComponent(<App />, document.getElementById("app"));
