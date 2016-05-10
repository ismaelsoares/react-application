import React from 'react';

let Input = React.createClass({
  OnButtonClick(e){
    e.preventDefault();
    let valor = this.refs.inputText.value;
    let lista = this.state.component;
    lista.push(valor);
    this.setState({component: lista})
  },
  OnRemoveButton(item){
    lista.splice();

  },
  getInitialState(){
    return({component: [] })
  },
  render(){
    return(
      <div>
      <input type="text" ref="inputText" name="inputText" />
      <button onClick={this.OnButtonClick} value="button1">Inserir</button>
      <ul>{this.state.component.map(function(item){
        return (<li>{item}<button onClick={this.OnRemoveButton.item}>Remover</button></li>);
      })}</ul>
      </div>
    );
  }
});
export default Input;
