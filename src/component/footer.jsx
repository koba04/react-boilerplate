var React = require('react');
var Link = require('react-router-component').Link;

module.exports = React.createClass({
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

