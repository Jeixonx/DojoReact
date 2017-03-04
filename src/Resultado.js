import React, {Component} from 'react';

class Resultado extends Component {
  resultado = {}

  constructor(props){
    super(props);
    this.resultado = props.resultado;
  }

  render(){
    return(
      <div className="item">
        <div className="titulo">{this.resultado.title}</div>
        <div className="imagen"><img src={this.resultado.thumbnail}/></div>
        <div className="precio">{this.resultado.price}</div>
        <div className="link">{this.resultado.permalink}</div>
      </div>
    );
  }
}

export default Resultado;
