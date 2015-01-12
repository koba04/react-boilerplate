import React        from 'react';
import Nav          from './Nav';
import Footer       from './Footer';
import InputArtist  from './InputArtist';
import Tracks       from './Tracks';
import TrackStore   from '../stores/TrackStore';

var style = {
  title: {
    fontFamily: "'Poiret One', cursive"
  }
};

var Artist = React.createClass({
  render() {
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
});

export default Artist;

