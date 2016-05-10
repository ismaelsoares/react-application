import React from 'react';
import Input from './input';

let Button = React.createClass({
  OnButtonClick(e){
    let valor = this.props.value;
  },
  render(){
    return(
      <button onClick={this.OnButtonClick}>Inserir</button>
    );
  }
});
export default Button;
