import React, { Component } from 'react';
import './SearchBar.css';
import TrackList from '../TrackList/TrackList';

class SearchBar extends Component {
  constructor(props){
    super(props),
    this.search = this.search.bind(this);

  }

  search(term){
      this.props.onSearch(term.target.value)
  }

  handleTermChange(event){
    this.props.
  }

  render() {
    return (
      <div className="SearchBar">
         <input placeholder="Enter A Song, Album, or Artist" />
         <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
