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
  const [horarios, setHorarios] = React.useState([
   {horario : 1, valor: 4, flag : true},
   {horario : 2, valor: 9, flag : false},
   {horario : 3, valor: 17, flag : false},
   {horario : 4, valor: 23, flag : false}

  ])
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue) ; console.log ("pija", value,hola);
    let newArray = horarios;
    newArray[props.val2].horario=props.val2;
    newArray[props.val2].valor=value;
    newArray[props.val2].flag=props.val1;
    
    setHorarios(newArray) ;
    console.log(horarios,"state con todo",newArray);
  };


//function algo(sorong) {console.log("tuvieja está en 4", sorong)} 

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