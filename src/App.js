import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';
import ImagenPerfil from './perfil.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { Autorenew, CenterFocusWeakOutlined } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

var textos=[0,1,2];

const useStyless = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 20,
    },
  },
  large: {
    width: 150,
    height: 150,
  },
}))

function ImageAvatars() {
  const classes = useStyless();

  return (
    <div className={classes.root}>
      <Avatar alt="Santiago Risso" src={ImagenPerfil} className={classes.large}/>
    </div>
  );
}

function Botones(props) {
  
  var noMas, noMenos;
  if(props.indice===0){
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const colortab = createMuiTheme({
  palette:{
    primary:{
      main: '#FFD4E9',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    margin: 'auto',
    width: '75%',
    height: 400,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Personal information." {...a11yProps(0)} />
        <Tab label="IT jobs." {...a11yProps(1)} />
        <Tab label="Other jobs." {...a11yProps(2)} />
        <Tab label="Misc" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
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
    if(indice!==0){
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
    </div>
    <div className="Avatars">
        <ImageAvatars></ImageAvatars>
    </div>
</header>

<body>
  <div className="Pestanas">
    <ThemeProvider theme={colortab}>
      <VerticalTabs></VerticalTabs>
    </ThemeProvider>
  </div>
</body>
  </>);
 
}

export default App;
