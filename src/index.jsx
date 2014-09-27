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
    var title = `Artist Top Tracks (${ this.props.path })`;
    return (
      <html lang="ja">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css" />
      </head>
      <body>
        <div id="app" className="container">
          <AnimationLocations path={this.props.path} transitionName="route">
            <Location path="/"        handler={Top}     />
            <Location path="/artist"  handler={Artist}  />
            <Location path="/country" handler={Country} />
          </AnimationLocations>
        </div>
      </body>
      <script src="bundle.js"></script>
      </html>
    );
  }
});

if (typeof window !== "undefined") {
  React.renderComponent(<App path={window.location.pathname} />, document);
} else {
  module.exports = App;
}

