import React from 'react';
import {Link} from 'react-router';
import classSet from 'classnames';

/**
 * nav Component
 */
export default class Nav extends React.Component {
  /**
   * propTypes
   * @property {string} current current page type (artist or country)
   */
  static get propTypes() {
    return {
      current: React.PropTypes.string
    };
  }
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const style = {
      nav: {
        marginBottom: 20,
        borderBottom: 'solid #eee'
      }
    };
    const artistClassName = classSet({
      active: this.props.current === 'artist'
    });
    const countryClassName = classSet({
      active: this.props.current === 'country'
    });
    return (
      <ul className="nav nav-pills nav-justified" style={style.nav}>
        <li className={artistClassName}><Link to="artist">Artist</Link></li>
        <li className={countryClassName}><Link to="country">Country</Link></li>
      </ul>
    );
  }
}
