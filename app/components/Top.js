'use strict';

import React  from 'react';
import Nav    from './Nav';
import Footer from './Footer';

let style = {
  title: {
    fontFamily: "'Playfair Display SC', serif"
  }
}

let Top = React.createClass({
  render() {
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>TopPage</h1>
        </header>
        <Nav />
        <article>
          <p>Please select artist or country</p>
        </article>
        <Footer />
      </div>
    );
  }
});

export default Top;
