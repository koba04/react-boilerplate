var express = require('express'),
    app     = express()
;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({jsx: { harmony: true } }));

var handler = function(name) {
  return function(req, res) {
    res.render('index', { path: "/"+name });
  };
};

app.get('/',        handler(''));
app.get('/artist',  handler('artist'));
app.get('/country', handler('country'));

app.use(express.static(__dirname));

app.listen(3000);
