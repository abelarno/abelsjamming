import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  constructor(props){
    super(props),
    this.handeNameChange = this.handeNameChange.bind(this);

  }

handeNameChange(name){
  this.props.onNameChange(name.target.value)
}

  render() {
    return (
      <div className="Playlist">
      <input value={'New Playlist'} onChange={this.handleNameChange}/>
       <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
       <a className="Playlist-save" onClick={this.orops.onSave}>SAVE TO SPOTIFY</a>
      </div>  
    );
  }
}

export default Playlist;
