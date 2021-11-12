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
  const [aspersores, setAspersores] =React.useState([
  {aspersor1: 1, tiempo: 5},
  {aspersor2: 2, tiempo: 5},
  {aspersor3: 3, tiempo: 5},
  {aspersor4: 4, tiempo: 5},
  {aspersor5: 5, tiempo: 5},
  {aspersor6: 6, tiempo: 5}])
  const [currentMenu, setCurrentMenu] =React.useState({
    menu:0,
    submenu:0

  }
  )
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  var ispressed = Boolean(field)

  const [name, setName] =React.useState("Nombre del boton") ;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
    console.log("target name1", event.currentTarget.id);
    const numberMenu = Number(event.currentTarget.id)
    //aca poner una logica que extraiga el número de menú y lo guarde en el estado acontinuación:
    setCurrentMenu({...currentMenu, menu : numberMenu})
  };
  const handleClick2 = (event) => {
    console.log("submenu2"),
      setAnchorEl2(event.currentTarget),
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
    console.log(name,"nombre");

  };
  
  const handleChange = (event) => {
 console.log("numero menú",currentMenu.menu)
    
 const garlopa = currentMenu.menu
    
    setName(event.target.value),console.log(name,"nombre2"),setAspersores({...aspersores, garlopa: name}),console.log(aspersores)};
   //ver como embocar lo de ...aspersores, ksks (ya que ahora están dentro de un array, justamente el n del array es el n, por eso no habria que hacer magias raras)
    //preguntar como verga se hace para "llamar a una variable cuyo nombre voy a saber más adelante en js"(promise)
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
        {aspersores[0].aspersor1}
      </Button>
      <Button
        id="2"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor2}
      </Button>
      <Button
        id="3"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor3}
      </Button>

      <Button
        id="4"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor4}
      </Button>

      <Menu
        id="Menu aspersores"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
          onClick={
            handleClick3
            //ACA   VA  LO  DEL   CAMPO  DE   TEXTO

          }
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
        }}
      >
        <MenuItem id="boton2" onClick={() => console.log("una pija de mono2")}>
          5'
        </MenuItem>
        <MenuItem onClick={handleClose}>10'</MenuItem>
        <MenuItem onClick={handleClose}>1 hs</MenuItem>
      </Menu>
<div>
      {ispressed? <porongademono>
      <TextField id="outlined-basic" label="Nombre del aspersor" value={name} onChange={handleChange} variant="outlined" /></porongademono>: <porongadeguanaco>chau</porongadeguanaco>}
      </div>
       </div>
  );
}
