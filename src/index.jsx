/** @jsx React.DOM */

if (typeof window !== "undefined") {
  require('insert-css')(require('./index.styl'));
}

var React               = require('react/addons'),
    Router              = require('react-router-component'),
    AnimationLocations  = require('./animation-locations.jsx'),
    Top                 = require('./component/top.jsx'),
    Artist              = require('./component/artist.jsx'),
    Country             = require('./component/country.jsx')
;

var App = React.createClass({
  render() {
    var CSSTransitionGroup = React.addons.CSSTransitionGroup,
        Location   = Router.Location
    ;
    return (
        <AnimationLocations path={this.props.path} transitionName="route">
          <Location path="/"        handler={Top}     />
          <Location path="/artist"  handler={Artist}  />
          <Location path="/country" handler={Country} />
        </AnimationLocations>
    );
  }
});

if (typeof window !== "undefined") {
  React.renderComponent(<App />, document.getElementById("app"));
} else {
  module.exports = App;
}

