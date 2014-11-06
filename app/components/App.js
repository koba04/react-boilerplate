if (typeof window !== "undefined") {
  require('insert-css')(require('./App.styl'));
}

var React               = require('react'),
    Router              = require('react-router-component'),
    Top                 = require('./Top'),
    Artist              = require('./Artist'),
    Country             = require('./Country')
;

module.exports = React.createClass({
  render() {
    var Locations  = Router.Locations;
    var Location   = Router.Location;
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
          <Locations path={this.props.path}>
            <Location path="/"        handler={Top}     />
            <Location path="/artist"  handler={Artist}  />
            <Location path="/country" handler={Country} />
          </Locations>
        </div>
      </body>
      <script src="bundle.js"></script>
      </html>
    );
  }
});
