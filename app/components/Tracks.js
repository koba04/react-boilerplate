import React from 'react';
import TrackStore from '../stores/TrackStore';

/**
 * tracks list Component
 */
export default class Tracks extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {array} tracks all tracks
     */
    this.state = {
      tracks: TrackStore.getAll()
    };
    this._onChange = this._onChange.bind(this);
  }

   /**
    * @listens {TrackStore} change event
    */
  componentDidMount() {
    TrackStore.addChangeListener(this._onChange);
  }

  /**
   * clean up event listener
   */
  componentWillUnmount() {
    TrackStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState({ tracks: TrackStore.getAll() });
  }
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const style = {
      track: {
        fontSize: 20,
        marginRight: 10
      },
      artist: {
        fontSize: 14,
        marginRight: 10
      }
    };
    const tracks = this.state.tracks.map( (track, index) => {
      return (
        <li className="list-group-item" key={index}>
          <span className="label label-info">{index + 1}</span>
          <a href={track.url} target="_blank"><span style={style.track}>{track.name}</span></a>
          <span style={style.artist}>{track.artist.name}</span>
          <small className="listeners glyphicon glyphicon-headphones">{track.listeners}</small>
        </li>
      );
    });
    return (
      <div className="tracks">
        <ul className="list-group">
          {tracks}
        </ul>
      </div>
    );
  }
}
