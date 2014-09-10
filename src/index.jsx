/** @jsx React.DOM */

require('insert-css')(require('./index.styl'));

var React     = require('react/addons'),
    Router    = require('react-router'),
    Top       = require('./top.jsx'),
    Artist    = require('./artist.jsx'),
    Country   = require('./country.jsx')
;

var App = React.createClass({
  propTypes: {
    activeRouteHandler: React.PropTypes.func.isRequired
  },
  render() {
    var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    return (
      <CSSTransitionGroup transitionName="route">
        {this.props.activeRouteHandler()}
      </CSSTransitionGroup>
    );
  }
});

var Routes  = Router.Routes,
    Route   = Router.Route
;

var route = (
  <Routes>
    <Route handler={App}>
      <Route name="top"      handler={Top}     addHandlerKey={true} path="/" />
      <Route name="artist"   handler={Artist}  addHandlerKey={true}          />
      <Route name="country"  handler={Country} addHandlerKey={true}          />
    </Route>
  </Routes>
);

React.renderComponent(route, document.getElementById("app"));
