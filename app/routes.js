'use strict';

import React    from 'react';
import App      from './components/App';
import Top      from './components/Top';
import Artist   from './components/Artist';
import Country  from './components/Country';
import {
  Route,
  DefaultRoute,
} from 'react-router';

export default (
    <Route name="top" handler={App} path="/">
      <Route name="artist"  handler={Artist} />
      <Route name="country" handler={Country} />
      <DefaultRoute handler={Top} />
    </Route>
)
