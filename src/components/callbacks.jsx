import React from 'react';

//Comunicação entre components
//Component capaz de definir eventos personalizados para um link (<a>)
//Para utilizar os eventos é necessário setar um evento na instância do components
//ex.: <Callback onClick={() => (alert("Hello"))} text="Clique aqui para Hello" />
let Callbacks = React.createClass({
//Definindo evento que chamará o evento setado pelo componente pai
  OnLinkClick(e){
//a variável e recebo o elemento
//previne a execução do evento padrão
e.preventDefault();
//execução do evento setado na propriedade OnClick
  this.props.OnClick();
},
  render(){
//redenização do componente HTML
    return(
      <a href="#" onClick={this.OnLinkClick}>{this.props.text}</a>
    );
  }

});

export default Callbacks;
