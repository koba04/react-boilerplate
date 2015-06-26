import React from 'react';
import AppTracksActionCreators from '../actions/AppTracksActionCreators';

export default class InputArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArtist: 'radiohead'
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const artist = this.state.inputArtist;
    if (artist) AppTracksActionCreators.fetchByArtist(artist);
  }
  onInputChange(e) {
    this.setState({
      inputArtist: e.target.value
    });
  }
  render() {
    return (
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)} >
        <div className="form-group">
          <label htmlFor="js-input-location" className="col-sm-1 control-label">Artist</label>
          <div className="col-sm-11">
            <input
              type="text"
              className="form-control"
              placeholder="Input Atrist Name"
              value={this.state.inputArtist}
              onChange={this.onInputChange.bind(this)}
              required={true}
            />
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
}
