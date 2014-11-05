var express = require('express'),
    app     = express(),
    React   = require('react')
;

require('node-jsx').install({ harmony: true });
var App = require('./components/index');

var handler = function(name) {
  return function(req, res) {
    var html = React.renderToString(React.createElement(App, {
      path: "/" + name
    }));
    res.send(html);
  };
};

app.get('/',        handler(''));
app.get('/artist',  handler('artist'));
app.get('/country', handler('country'));

app.use(express.static(__dirname+'/dist'));

var port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
