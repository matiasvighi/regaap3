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
  const [aspersores, setAspersores] =React.useState({aspersor1: "Aspersor1",
  aspersor2: "Aspersor2",
  aspersor3: "Aspersor3",
  aspersor4: "Aspersor4",
  aspersor5: "Aspersor5",
  aspersor6: "Aspersor6",})
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  var ispressed = Boolean(field)

  const [name, setName] =React.useState("Nombre del boton") ;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
    console.log("target name", event.currentTarget.id);
  };
  const handleClick2 = (event) => {
    console.log("submenu2"),
      setAnchorEl2(event.currentTarget),
      console.log(event.currentTarget);
    console.log("target name", event.currentTarget.id);
  };
  const handleClick3 = (event) => {
    setField(true),
    console.log("estoy tocando el boton delcampo de texto"),
    console.log(event),console.log("event"),console.log(field),console.log("field"),
    console.log(name,"nombre");

  };
  
  const handleChange = (event) => {setName(event.target.value),console.log(name,"nombre2"),setAspersores({...aspersores, aspersor1: name}),console.log(aspersores)};
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  

  return (
    <div>
      <Button
        id="basic-button1"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor1}
      </Button>
      <Button
        id="basic-button2"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor2}
      </Button>
      <Button
        id="basic-button3"
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {aspersores.aspersor3}
      </Button>

      <Button
        id="basic-button4"
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
