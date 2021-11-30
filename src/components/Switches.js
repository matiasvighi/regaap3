import React from 'react';
import Switch from '@material-ui/core/Switch';
import Sliderx from './Sliderx';
import Button from "@material-ui/core/Button";


export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });
  const [flagGrabar, setFlagGrabar] =React.useState(false);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
    // console.log (state);
    };
  const handleClick = (event) => {
    setFlagGrabar(true)
    
   }
   

  return (
    <div>
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        checked={state.checkedA}
        color="primary"
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        
      />
      
      
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch
        checked={state.checkedC}
        onChange={handleChange}
        color="primary"
        name="checkedC"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

     <Sliderx val1={true} val2={0}></Sliderx>
   
     
   
     <Sliderx val1={state.checkedA} val2={1}></Sliderx> 
     
     <Sliderx val1={state.checkedB} val2={2} ></Sliderx>
     <Sliderx val1={state.checkedC} val2={3}></Sliderx>
     <Button id="1" variant="outlined" onClick={handleClick}>send</Button>
     {//poner un renderizado condicional usando el flag para llamar a guarda y blbla y pasarle el flag como para
     // como para que sepa que tiene que hacer el post
     }
    </div>
   
  );
  
}