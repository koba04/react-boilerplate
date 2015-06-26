import React from 'react';
import {fetchByCountry} from '../actions/AppTracksActionCreators';

/**
 * select country Component
 */
export default class SelectCountry extends React.Component {
  /**
   * propTypes
   * @property {array} selectable counrty list
   */
  static get propTypes() {
    return {
      countries: React.PropTypes.array
    };
  }
  /**
   * default props values
   */
  static get defaultProps() {
    return {
      countries: ['Japan', 'United States', 'United Kingdom']
    };
  }
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} selectCountry selected country
     */
    this.state = {
      selectCountry: props.countries[0]
    };
  }
  /**
   * handle submit form event
   * @param {SyntheticEvent} e
   */
  handleSubmit(e) {
    e.preventDefault();
    const country = this.state.selectCountry;
    if (country) fetchByCountry(country);
  }
  /**
   * handle change event on select options
   * @param {SyntheticEvent} e
   */
  onSelectChange(e) {
    this.setState({
      selectCountry: e.target.value
    });
  }
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const countries = this.props.countries.map(country => (
      <option value={country} key={country}>{country}</option>
    ));
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
