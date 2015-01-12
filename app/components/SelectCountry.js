import React from 'react';
import AppTracksActionCreators from '../actions/AppTracksActionCreators';

var SelectCountry = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getDefaultProps() {
    return {
      countries: ['Japan', 'United States', 'United Kingdom']
    };
  },
  getInitialState() {
    return {
      selectCountry: this.props.countries[0]
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    var country = this.state.selectCountry;
    if (country) {
      AppTracksActionCreators.fetchByCountry(country);
    }
  },
  render() {
    var countries = this.props.countries.map( country => {
      return (
        <option value={country} key={country}>{country}</option>
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

export default SelectCountry;
