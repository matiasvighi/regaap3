
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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




export default function MatTest(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" 
            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>  

            
    
              <MenuIcon />
            </IconButton>
            <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClick}>Poner en hora</MenuItem>
  <MenuItem onClick={handleClose}>Consultar Parámetros</MenuItem>
  <MenuItem onClick={handleClose}>Configurar</MenuItem>
  <MenuItem onClick={handleClose}>Tu Vieja en tanga</MenuItem>
</Menu>
 
            

            <Typography variant="h6" className={classes.title}>
              Regador 2000
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
          
        </AppBar>
      </div>
    );
    function boton() {
      
      
    }
  }











