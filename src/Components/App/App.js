import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      searchResults: [],
      playlistName: "playlist",
      playlistTracks: ['name', 'artists', 'album', 'id']
    },
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  };


  addTrack(track){
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      } else {
        
      }
    }
 
    removeTrack(track) {
      let updatedplaylist = this.state.playlistTracks;
      updatedplaylist.splice(this.state.playlistTracks.indexOf(track), 1);
      this.setState({playlistTracks: updatedplaylist});
    }
  



  render() {
    return (
      <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
        <SearchBar />
       <div className="App-playlist">
         <SearchResults searchResults={this.props.searchResults} onAdd={this.addTrack}/>
         <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
