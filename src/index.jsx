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
      view: ''
    };
  },
  componentDidMount: function() {
    var router = new Director.Router();
    router.on('artist',   function() { this.setState({view: 'artist'});   }.bind(this));
    router.on('country',  function() { this.setState({view: 'country'});  }.bind(this));
    router.on('',         function() { this.setState({view: ''});      }.bind(this));
    router.init();
  },
  render: function() {
    var view;
    switch (this.state.view) {
      case 'artist':
        view = <Artist />
        break;
      case 'country':
        view = <Country />
        break;
      default:
        view = <Top />
        break;
    }
    return (<div>{view}</div>);
  }
});

React.renderComponent(<App />, document.getElementById("app"));
