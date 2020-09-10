import React, { useState } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';
import ImagenPerfil from './perfil.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

var textos=[0,1,2];
var cambiomentira;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 20,
    },
  },
  large: {
    width: 200,
    height: 200,
  },
}))

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Santiago Risso" src={ImagenPerfil} classname={classes.large}/>
    </div>
  );
}

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
    <div className="Titulos">
      <h1>Santiago Risso</h1>
      <h2>Studying to be a Developer.</h2>
      <ImageAvatars></ImageAvatars>
    </div>
    <div className="Fotoheader">
      <img src={ImagenPerfil}></img>
    </div>
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
