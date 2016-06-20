import React from 'react';

let BtLike = React.createClass({
  getInitialState(){
    return {
      like: 'Curtir'
    };
  },
  onClickEvent(e){
    e.preventDefault();
    this.setState({
      like: 'Curtiu'
    });
  },
  render(){
    let label = this.like;
    return(
      <button onClick = {this.onClickSetLike}>{label}</button>
    );
  }
});
export default BtLike;
