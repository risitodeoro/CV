import React, { useState } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';

var textos=[0,1,2];
var i=0;

function Botones(props) {
  
  var noMas, noMenos;
  if(props.indice==0){
    noMenos=true
  }
  if(props.indice>=2){
    noMas=true
  }
  
  return(
  <div className="botones">
    <div className="Volver">
      <Button disabled={noMenos} color="secondary" onClick={props.hiceclick}>
        Atras 
      </Button>
    </div>
    <div className="Siguiente">
      <Button disabled={noMas} color="secondary" onClick={props.hiceclickAdelante}>
        Adelante
      </Button>
    </div>
  </div>
  )

}

function App() {

  var [indice, setearindice]=useState(0);
  var clickadelante=() => {
    if(indice<=1){
      setearindice(indice+1)  
    }else{
      setearindice(indice=0)  
    }
  };
  var clickatras=() => {
    if(indice!=0){
      setearindice(indice-1)
    }else{
      setearindice(indice+2)
    }
  };
  return (<>
<header>
    <h1> Falling in the real-time trap </h1>
    <h2> The behind the scenes in the streaming data world. </h2>
</header>

<body>
    <div className="MainText">
        <p>
          {textos[indice]}
        </p>
    </div>
    <Botones indice={indice} hiceclick={clickatras} hiceclickAdelante={clickadelante}></Botones>
</body>
  </>);
 
}

export default App;
