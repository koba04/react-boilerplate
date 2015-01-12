import React from 'react';
import {Link} from 'react-router-component';

var style = {
  nav: {
    marginBottom: 20,
    borderBottom: 'solid #eee'
  }
};

var Nav = React.createClass({
  propTypes: {
    current: React.PropTypes.string
  },
  render() {
    var artistClassName = React.addons.classSet({
      active: this.props.current === "artist"
    });
    var countryClassName = React.addons.classSet({
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

export default Nav;
