import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Flag } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
 
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function Sliderx(props) {
  const classes = useStyles();
  
  
  const [value, setValue] = React.useState(30);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue) ; console.log ("pija", newValue) 
};


function algo(sorong) {console.log("tuvieja está en 4", sorong)} 

console.log (props)
var hola = props.val2
var hola2 = !props.val1
//console.log (hola)
  

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>

      Horario {hola}
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={1}
        max={24}
        onChange={handleChange} 
        disabled={hola2}       
        
           
               
      />
     
   
           
     
    </div>
  );
}