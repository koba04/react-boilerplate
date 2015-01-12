'use strict';

import React  from 'react';
import {Link} from 'react-router-component';

export default React.createClass({
  displayName: 'Nav',
  propTypes: {
    current: React.PropTypes.string
  },
  render() {
    let style = {
      nav: {
        marginBottom: 20,
        borderBottom: 'solid #eee'
      }
    };
    let artistClassName = React.addons.classSet({
      active: this.props.current === "artist"
    });
    let countryClassName = React.addons.classSet({
      active: this.props.current === "country"
    });
    return (
      <ul className="nav nav-pills nav-justified" style={style.nav}>
        <li className={artistClassName}><Link href="/artist">Artist</Link></li>
        <li className={countryClassName}><Link href="/country">Country</Link></li>
      </ul>
    );
  }
});
