'use strict';

import React                    from 'react/addons';
import AppTracksActionCreators  from '../actions/AppTracksActionCreators';

export default React.createClass({
  displayName: 'InputArtist',
  mixins: [React.addons.LinkedStateMixin],
  getInitialState() {
    return {
      inputArtist: 'radiohead'
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    let artist = this.state.inputArtist;
    if (artist) {
      AppTracksActionCreators.fetchByArtist(artist);
    }
  },
  render() {
    return (
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="js-input-location" className="col-sm-1 control-label">Artist</label>
          <div className="col-sm-11">
            <input type="text" className="form-control" placeholder="Input Atrist Name" valueLink={this.linkState('inputArtist')} required />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-11">
            <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search">search</span></button>
          </div>
        </div>
      </form>
    );
  }
});
