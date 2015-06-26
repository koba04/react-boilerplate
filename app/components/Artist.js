import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import InputArtist from './InputArtist';
import Tracks from './Tracks';

export default class Artist extends React.Component {
  render() {
    const style = {
      title: {
        fontFamily: "'Poiret One', cursive"
      }
    };
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>Artist Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="artist" />
        <article className="main-content">
          <InputArtist />
          <Tracks />
        </article>
        <Footer />
      </div>
    );
  }
}
