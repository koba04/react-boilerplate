'use strict';

// browser's entry point

import React from 'react';
import App from './components/App';

React.render(
  React.createElement(App, { path: window.location.pathname }),
  document
);
