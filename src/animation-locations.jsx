/** @jsx React.DOM */

// Taken from https://github.com/andreypopp/react-router-page-transition
var React              = require('react/addons'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup,
    Router             = require('react-router-component')
;

module.exports = React.createClass({
    mixins: [Router.RouterMixin, Router.AsyncRouteRenderingMixin],

    getRoutes() {
      return this.props.children;
    },

    render() {
      var handler = this.renderRouteHandler();
      var isPopState = this.state.navigation.isPopState;
      var enabled = isPopState ?
                    !!this.props.popStateTransitionName :
                    !this.state.navigation.noTransition;
      var props = {
        component: React.DOM.div,
        transitionEnter: enabled,
        transitionLeave: enabled,
      };
      if (isPopState && this.props.popStateTransitionName) {
        props.transitionName = this.props.popStateTransitionName;
      } else if (this.state.navigation.transitionName) {
        props.transitionName = this.state.navigation.transitionName;
      }

      handler.props.key = this.state.match.path;
      return this.transferPropsTo(CSSTransitionGroup(props, handler));
    }
});
