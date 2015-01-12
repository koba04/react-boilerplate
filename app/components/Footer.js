'use strict';

import React  from 'react';
import {Link} from 'react-router-component';

export default React.createClass({
  displayName: 'Footer',
  render() {
    return (
      <footer>
        <div className="well well-lg">
          <Link href="/">TOP</Link>&nbsp;|&nbsp;
          <a href="https://github.com/koba04/react-boilerplate">github</a>
        </div>
      </footer>
    );
  }
});
