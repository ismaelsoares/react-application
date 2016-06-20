import React from 'react';

let Input = React.createClass({
  OnButtonClick(e){
    e.preventDefault();
    let valor = this.refs.inputText.value;
    let lista = this.state.component;
    lista.push(valor);
    this.setState({component: lista})
  },
  OnButtonRemove(e){
    e.preventDefault();
    let lista = this.state.component;
    delete lista[e.currentTarget.value];
    this.setState({ component: lista });
  },
  getInitialState(){
    return({component: [] })
  },
  render(){
    let self = this;
    return(
      <div>
      <input type="text" ref="inputText" name="inputText" />
      <button onClick={this.OnButtonClick}>Inserir</button>
      <ul>{this.state.component.map(function(item, index){
        return (<li>{item}<button value={self.state.component.indexOf(item)} onClick={self.OnButtonRemove}>Excluir</button></li>);
      })}
      </ul>
      </div>
    );
  }
});
export default Input;
