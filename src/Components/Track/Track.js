import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

renderAction(){
 if(isRemoval){
  return "-";
 } else {
  return "+";
 };
}

    render() {
    return (
      <div className="Track">
      <div className="Track-information">
        <h3>trackname</h3>
        <p>track artist | album</p>
      </div>
      <a className="Track-action">{renderAction()}</a>
    </div>
    );
  }
}

export default Track;
