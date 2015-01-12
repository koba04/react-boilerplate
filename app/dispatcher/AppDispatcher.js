'use strict';

import {Dispatcher} from 'flux';
import assign from 'object-assign';
import AppConstants from '../constants/AppConstants';

var PayloadSources = AppConstants.PayloadSources;

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

export default AppDispatcher;
