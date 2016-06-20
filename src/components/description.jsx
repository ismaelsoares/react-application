import React from 'react';

let Description = React.createClass({
  render(){
    return(
    <div>
      <textarea placeholder={this.props.placeholder}/>
    </div>
    );
  }
});
export default Description;
