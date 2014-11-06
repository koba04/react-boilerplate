// browser's entry point
var React   = require('react'),
    App     = require('./components/App')
;

React.render(
  React.createElement(App, { path: window.location.pathname }),
  document
);
