/** @jsx React.DOM */

var React     = require('react'),
    Director  = require('director'),
    Top       = require('./top.jsx'),
    Artist    = require('./artist.jsx'),
    Country   = require('./country.jsx')
;

var App = React.createClass({
  getInitialState: function() {
    return {
      view: <Top />
    };
  },
  componentDidMount: function() {
    var router = new Director.Router();
    router.on('artist',   function() { this.setState({view: <Artist />});   }.bind(this));
    router.on('country',  function() { this.setState({view: <Country />});  }.bind(this));
    router.on('',         function() { this.setState({view: <Top />});      }.bind(this));
    router.init();
  },
  render: function() {
    return (<div>{this.state.view}</div>);
  }
});

React.renderComponent(<App />, document.getElementById("app"));
