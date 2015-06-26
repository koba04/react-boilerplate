import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import SelectCountry from './SelectCountry';
import Tracks from './Tracks';

/**
 * Country page Component
 */
export default class Country extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const style = {
      title: {
        fontFamily: "'Roboto Condensed', sans-serif"
      }
    };
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
}
