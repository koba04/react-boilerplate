'use strict';

import express  from 'express';
import React    from 'react';
import Router   from 'react-router';
import routes   from './routes';

let app = express();

app.use(express.static(__dirname+'/../dist'));
app.get('/favicon.ico', (req, res) => { res.send('') });

app.use((req, res) => {
  Router.run(routes, req.path, (Handler) => {
    res.send(React.renderToString(<Handler path={req.path} />));
  });
});

let port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
