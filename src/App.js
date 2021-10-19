import logo from './logo.svg';
import './App.css';
import Garompa from './components/Garompa';
import Soronga from './components/Soronga';
import Switches from './components/Switches';
import Days from './components/Days';
import Sliderx from './components/Sliderx';
import TiempoRegado from './components/TiempoRegado'

import MatTest from './components/MatTest';
import Abc from './components/Abc';
import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import  Menu from '@material-ui/core/Menu';

//import About from './pages/About';
import { AppBar, Button, Divider, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import * as SwitchDos from '@material-ui/core/Switch';





import BarUp from './components/BarUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import WeekView2 from './components/WeekView2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(anchorEl , "abro");
    setAnchorEl(event.currentTarget);

    
    
  };

  const handleClose = () => { console.log ("tuvieja");
  console.log(anchorEl ,"cierro");
    setAnchorEl(null);
    
  };

  const classes = useStyles();
    return (
    
    <Router>
          
      <AppBar position="static">
        <Toolbar>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
            </IconButton>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl}
        onClose={handleClose}
       
      >
       <Link to="/">
        <MenuItem onClick={handleClose}>Horarios</MenuItem>
        </Link>
        <Link to="/about">
        <MenuItem onClick={handleClose}>Dias</MenuItem>
        </Link> 
        <Link to="users">
        <MenuItem onClick={handleClose}>Tiempo</MenuItem>
        </Link>  
        <MenuItem onClick={handleClose}>tu vieja</MenuItem>
        
      </Menu>

      
  
          
       

         
              <Link to="/">
              <Button>Home</Button>
              </Link>
              <Link to="/about">
            <Button color="">About</Button>
          </Link>
          <Link to="/users">
            <Button>Users</Button>
          </Link>
              
            
          </Toolbar>
       </AppBar>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/users">
            <Users />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
          
          <Route path="/berga">
            <Berga />
           </Route>

           
        
        </Switch>
      
    </Router>
  );
  function Home() {


    return (  
      <div>
     <Switches></Switches>
     
     
     
     </div>
     )
     
  }
  
  
  
  function About() {
  return(
  <div>
    <Days></Days>
    
    
    </div>
  )  
  }
  
  function Users() {
    return(
    <div>
    
    <TiempoRegado></TiempoRegado>
   
    </div>
)  
}
  function Berga() {
   return <h2>Menudemierda</h2>;
  }
  }
