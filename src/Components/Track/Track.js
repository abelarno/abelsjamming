import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props),
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  };

renderAction(){
  const isRemove = true;

  if(this.isRemoval=== true){
      return <span onClick={this.removeTrack}>-</span>
    } else {
      return <span onClick={this.addTrack}>+</span>
  };
}

addTrack(){
  this.props.onAdd(this.props.track);
}

removeTrack(){
  this.props.onRemove(this.props.track);
}

    render() {
    return (
      <div className="Track">
      <div className="Track-information">
        <h3>trackname</h3>
        <p>track artist | album</p>
      </div>
      <a className="Track-action">{this.renderAction}</a>
    </div>
    );
  }
}

export default Track;
