import {Dispatcher} from 'flux';
import assign       from 'object-assign';
import AppConstants from '../constants/AppConstants';

const PayloadSources = AppConstants.PayloadSources;

export default assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});
