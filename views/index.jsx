/** @jsx React.DOM */

var React   = require('react'),
    App     = require('../src/index'),
    Layout  = require('./layout')
;

module.exports = React.createClass({
  render: function() {
    return (
      <Layout>
        <App path={this.props.path} />
      </Layout>
    );
  }
});

