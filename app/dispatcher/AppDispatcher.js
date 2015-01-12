'use strict';

import {Dispatcher} from 'flux';
import assign       from 'object-assign';
import AppConstants from '../constants/AppConstants';

let PayloadSources = AppConstants.PayloadSources;

export default assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});
