/** @jsx React.DOM */

module.exports = {
  componentDidMount() {
    document.title = `Artist Top Tracks (${ window.location.pathname })`;
  }
};
