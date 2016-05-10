import React from 'react';
//inicialização do componente A
let ComponentA = React.createClass({
  render(){
    return(
      <div>Hello, i'm a componentA</div>
    );
  }
});
//inicialização o component B
let ComponentB = React.createClass({
  render(){
    return(
      <div>Hello, i'm a componentB</div>
    );
  }
});
//inicializando e definindo o valor inicial para componente Dynamics
let Dynamics = React.createClass({
  getInitialState(){
    return({component: 'component-a'});
  },

//criando o botao e definindo a mudança de estado do componente caso o evento seja chamado
//caso o evento seja disparado, o componente dono do evento que sofreu o disparo sera chamado
//eventos devem ser separados por vírgulas
  OnClickButton(e){
    e.preventDefault();
    this.setState({component: e.currentTarget.value});
  },
//inicializando o componente DynamicComponent
  render(){
    let DynamicComponent = ComponentA;
//se o estado do component dono for igual a component-b, DynamicComponent recebera o ComponentB
    if(this.state.component == 'component-b')
      DynamicComponent = ComponentB;
    return(
      <div>
        <button onClick={this.OnClickButton} value="component-a">Abrir component A</button>
        <button onClick={this.OnClickButton} value="component-b">Abrir component B</button>
        <DynamicComponent />
      </div>
    );
  }
});
export default Dynamics;
