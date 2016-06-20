import React from 'react';
import Photo from './photo';

let DivComment = React.createClass({
  render(){
    let createComment = (comment) =>
    { return
      <div>
        <Photo src={'../images/image1.jpg'} width='300' heigth='300'/>
        <div key={user.id}>{user.name}</div>
        <div key={comment.id}>{comment.text}</div>
      </div>
    };
    return <div>{this.props.comments.map(createComment)}</div>
  }
});

export default DivComment;
