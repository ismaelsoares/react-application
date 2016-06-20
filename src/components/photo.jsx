import React from 'react';

let Photo = React.createClass({
  getInitialState(){
    return({file: ''});
  },
  handleImageSubmit(e){
    e.preventDefault();
    let input = e.target;
    let reader = new FileReader();
    reader.onload = () =>{
      let dataUrl = reader.result;
      let output = document.getElementsById("output");
      output.src = dataUrl;
    }
    reader.readAsDataURL(file);
  },
  render(){
    return(
      <div>
      <input onChange={(e)=>this.state.handleImageSubmit(e)} type="file" />
        <img id='output' />
      </div>

    );
  }
});
export default Photo;
