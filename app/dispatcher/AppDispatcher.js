var Dispatcher    = require('flux').Dispatcher,
    assign        = require('object-assign'),
    AppConstants  = require('../constants/AppConstants')
;

var PayloadSources = AppConstants.PayloadSources;

module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});
