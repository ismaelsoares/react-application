import React from 'react';


let Button = React.createClass(
  getInitialState(){
    like: 'Curtir'
  },
  onClickEvent(e){
    e.preventDefault();
    this.setState({
      liked: 'Curtiu';
    });
  },
  render(){
    let label = this.setState;
    return(
      <button onClick={this.onClickEvent}>{label}</button>
    );
  }
});
export default Button;
