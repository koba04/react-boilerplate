'use strict';

import React          from 'react';
import Nav            from './Nav';
import Footer         from './Footer';
import SelectCountry  from './SelectCountry';
import Tracks         from './Tracks';
import TrackStore     from '../stores/TrackStore';

export default React.createClass({
  displayName: 'Country',
  render() {
    let style = {
      title: {
        fontFamily: "'Roboto Condensed', sans-serif"
      }
    }
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="country" />
        <article className="main-content">
          <SelectCountry />
          <Tracks />
        </article>
        <Footer />
      </div>
    );
  }
});
