import React from 'react';
//import TextAreaComments from './textAreaComments';
//import DivComment from './divComment';
//import BtComment from './btComment';
import FormComment from './formComment';
import ImageUpload from './imageUpload';
import Photo from './photo';

let App = React.createClass({
    render(){
    return(
      <div>
        <FormComment />
        <Photo />
      </div>
    );
  }
});
export default App;










































/*let CommentBox = React.createClass({
  render(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

let CommentList = React.createClass({
  render(){
    return(
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

let CommentForm = React.createClass({
  render(){
    return(
      <div className="commentForm">Hello! I am CommentForm</div>
    );
  }
});

let Comment = React.createClass({
  render(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));*/
