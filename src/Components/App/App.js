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
      playlistTracks: []
    };
  };
  render() {
    return (
      <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
        // Add a SearchBar component -->
       <div className="App-playlist">
         <SearchResults searchResults={this.props.searchResults}/>
         // Add a Playlist component -->
    </div>
  </div>
</div>
    );
  }
}

export default App;
