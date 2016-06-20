import React from 'react';
//import BtComment from './btComment';
//import TextAreaComments from './textAreaComments';
import DivComment from './divComment';
//import ImageUpload from './imageUpload';

let FormComment = React.createClass({
  getInitialState(){
    return{user: [], comments: [], text: '' };
  },
  onChange(e){
    this.setState({text: e.target.value, username: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    let nextItem = this.state.comments.concat([{
      user: this.state.text,
      text: this.state.text,
       id: Date.now()}]);
    let nextText = '';
    this.setState({comments: nextItem, text: nextText, username: nextItem});
  },
  render(){
    return(
    <div>
      <DivComment comments={this.state.comments} users={this.state.users} />
      <input placeholder={"Digite seu nome"} onChange={this.onChange} user={this.state.text}/>
      <form onSubmit={this.handleSubmit}>        
        <textarea placeholder={"Escreva o comentario"} onChange={this.onChange} value={this.state.text} />
      <button>{'Comentar'}</button>
      </form>
    </div>
    );
  }
});
export default FormComment;
