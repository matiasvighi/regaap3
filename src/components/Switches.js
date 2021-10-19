import React from 'react';
import Switch from '@material-ui/core/Switch';
import Sliderx from './Sliderx';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
    // console.log (state);
  };
   
   

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

     <Sliderx val1={true} val2={1}></Sliderx>
   
     
   
     <Sliderx val1={state.checkedA} val2={2}></Sliderx> 
     
     <Sliderx val1={state.checkedB} val2={3} ></Sliderx>
     <Sliderx val1={state.checkedC} val2={4}></Sliderx>
     
    </div>
   
  );
  
}