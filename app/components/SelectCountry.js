import React from 'react';
import AppTracksActionCreators from '../actions/AppTracksActionCreators';

export default class SelectCountry extends React.Component {
  static get defaultProps() {
    return {
      countries: ['Japan', 'United States', 'United Kingdom']
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      selectCountry: props.countries[0]
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const country = this.state.selectCountry;
    if (country) {
      AppTracksActionCreators.fetchByCountry(country);
    }
  }
  onSelectChange(e) {
    this.setState({
      selectCountry: e.target.value
    })
  } 
  render() {
    const countries = this.props.countries.map( country => {
      return <option value={country} key={country}>{country}</option>
    });

    return (
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)} >
        <div className="form-group">
          <label htmlFor="inputCountry" className="col-sm-1 control-label">Country</label>
          <div className="col-sm-5">
            <select className="form-control" value={this.state.selectCountry} onChange={this.onSelectChange.bind(this)}>
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
}
