import React from 'react';

let Title = React.createClass({
  render(){
    return(
      <div><h2>{this.props.title}</h2></div>
    );
  }
});
export default Title;
