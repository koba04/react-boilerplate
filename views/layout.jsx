/** @jsx React.DOM */

var React     = require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
      <html lang="ja">
      <head>
        <title>Artist Top Tracks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css" />
      </head>
      <body>
        <div id="app" className="container">{this.props.children}</div>
      </body>
      <script src="bundle.js"></script>
      </html>
    );
  }
});
