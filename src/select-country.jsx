/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      selectCountry: ''
    };
  },
  handleSubmit: function() {
    var country = this.state.selectCountry;
    if (country) {
      this.props.onHandleSubmit(country);
    }
    return false;
  },
  render: function() {
    var countries = ['Japan', 'United States', 'United Kingdom'].map(function(country) {
      return (
        <option value={country}>{country}</option>
      );
    });

    return (
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="inputCountry" className="col-sm-1 control-label">Country</label>
          <div className="col-sm-5">
            <select className="form-control" valueLink={this.linkState('selectCountry')}>
              {countries}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-11">
            <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search">search</span></button>
          </div>
        </div>
      </form>
    );
  }
});
