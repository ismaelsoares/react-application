import React from 'react';

let MyComponent = React.createClass({
  render(){
    var only = React.Children.only(this.props.children);
    console.log(only);
    return(
      <div>
      {this.props.name};
      <p key1="firsty">a child</p>
      <p key2="2">another</p>
      </div>
    );
  }
});
export default MyComponent;
