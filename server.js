'use strict';

import express  from 'express';
import React    from 'react';
import App      from './app/components/App';

let app     = express();
let handler = (name) => {
  return (req, res) => {
    let html = React.renderToString(React.createElement(App, {
      path: "/" + name
    }));
    res.send(html);
  };
};

app.get('/',        handler(''));
app.get('/artist',  handler('artist'));
app.get('/country', handler('country'));

app.use(express.static(__dirname+'/dist'));

let port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
