import React from 'react';

let TextAreaComments = React.createClass({
  render(){
    return(
      <textarea placeholder={this.props.placeholder}></textarea>
    );
  }
});
export default TextAreaComments;
