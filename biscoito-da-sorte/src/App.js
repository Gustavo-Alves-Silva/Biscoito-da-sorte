import React,{ Component } from "react";
import './estilo.css'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    textoFrase: ''
  };

  this.quebraBiscoito = this.quebraBiscoito.bind(this);

  this.frases = ['O tempo cura todas as feridas', 'A felicidade está nas coisas simples.',
  'O amor é a resposta para tudo.',
  'Aprenda com os erros e siga em frente.',
 'O pensamento positivo pode mudar sua vida.',
'A gratidão transforma o que temos em suficiente.','A vida é uma aventura emocionante']
}


quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
  state.textoFrase = this.frases[numeroAleatorio];
  this.setState(state);
}

  render(){
  return (
    <div className="container">
        <img className="img" src={require('./assents/biscoitodasorte.jfif')}/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>
  );
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button className="botao" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}
export default App;
