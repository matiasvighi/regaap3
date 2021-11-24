import * as React from "react";

import TextField from "@material-ui/core/TextField";

//import Button from "@mui/material/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";
import { SentimentSatisfiedAlt, SettingsSystemDaydreamRounded } from "@material-ui/icons";

export default function TiempoRegado() {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [field, setField] = React.useState(false);
  const [naspersor, setNaspersor]=React.useState("")
  const [aspersores, setAspersores] =React.useState([
  {id:1, aspersor: "boton1", tiempo: 5},
  {id:2, aspersor: "boton2", tiempo: 5},
  {id:3, aspersor: "boton3", tiempo: 5},
  {id:4, aspersor: "boton4", tiempo: 5},
  {id:5, aspersor: "boton5", tiempo: 5},
  {id:6, aspersor: "boton6", tiempo: 5}])
  const [currentMenu, setCurrentMenu] =React.useState({
    menu:0,
    submenu:0

  }
  )
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  var ispressed = Boolean(field)

  //const [name, setName] =React.useState("Nombre del boton") ;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
    console.log("target name1", event.currentTarget.id);
    const numberMenu = Number(event.currentTarget.id)
    //aca poner una logica que extraiga el número de menú y lo guarde en el estado acontinuación:
    setCurrentMenu({...currentMenu, menu : numberMenu})
  };
  const handleClick2 = (event) => {
    console.log("submenu2");
    setAnchorEl2(event.currentTarget);
    console.log(event.currentTarget);
    console.log("target name2", event.currentTarget.id);
    const numberSubMenu = Number(event.currentTarget.id)
    //aca poner una logica que extraiga el número de submenú y lo guarde en el estado acontinuación:
    setCurrentMenu({...currentMenu, submenu : numberSubMenu})
  };
  const handleClick3 = (event) => {
    setField(true),
    console.log("estoy tocando el boton delcampo de texto"),
    console.log(event),console.log("event"),console.log(field),console.log("field"),
  //  console.log(name,"nombre");
    handleClose();

  };
  
  const handlechange = (event) => {
    
    setNaspersor(event.target.value);  
    console.log(naspersor,"nombre del boton");
  }
    const handleSubmit = (event) => { 
      
    event.preventDefault();
    console.log("numero menú",currentMenu.menu)
    
    var newArray = aspersores   
    const garlopa = currentMenu.menu;
    
    const aspersorIndex = newArray.findIndex(aspersores=> aspersores.id === garlopa);
    newArray[aspersorIndex] = { ...newArray[aspersorIndex], aspersor:naspersor };
    var newObject= newArray
    console.log(newArray[0], newArray[1], "array?")
    
    console.log(naspersor,"nombre2"),
    setAspersores(newArray),
    console.log(aspersores,"coso completo",aspersores[0].aspersor)
    handleClick3()
    //esto es una villa, preguntar a chori como se hace bien
    setAnchorEl2(event.currentTarget);
    setTimeout(function(){
    setAnchorEl2(null)
    setField(false)
    }, 5);
    // aca termina la villa 11114//
    };
   
  
    const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
   
    };
  

  return (
    <div>
      <Button
        id="1"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
     
        {aspersores[0].aspersor//aca va algo para buscar el "0" con el id pero así funciona bien
        } 
       </Button>
       <Button
        id="2"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores[1].aspersor}
        </Button>
        <Button
           id="3"
          variant="outlined"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
      >
        {aspersores[2].aspersor}
       </Button>

      
       <Button
      
          id="4"
          variant="outlined"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
      >
        {aspersores[3].aspersor}
      </Button>
      
      <Menu
        id="Menu aspersores"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}tu vieja
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem id="boton1" onClose={handleClose} onClick={handleClick2}>
          Setear
        </MenuItem>
        <MenuItem
          id="boton2"
          onClose={handleClose}
          onClick={handleClick3}         
        >
          Nombrar
        </MenuItem>
       <MenuItem id="boton3" onClose={handleClose}>
          nada por ahora
      </MenuItem>
      </Menu>
      <Menu
        id="Set aspersor"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}tu vieja
      >
       <MenuItem id="boton2" onClick={() => console.log("una pija de mono2")}>
          5'
       </MenuItem>
       <MenuItem onClick={handleClose}>10'</MenuItem>
       <MenuItem onClick={handleClose}>1 hs</MenuItem>
       </Menu>
   
      <form onSubmit={handleSubmit}>

      {ispressed? 
        <porongademono>
        <TextField id="outlined-basic" label="Nombre del aspersor"
        variant="outlined" 
        onChange={handlechange} 
      
      
        />
        </porongademono>
      :
        <porongadeguanaco></porongadeguanaco>}
        </form>
    </div>
  );
}
