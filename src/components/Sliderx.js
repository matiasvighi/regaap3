import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Flag } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Guardaymuestrasliderx from './Guardaymuestrasliderxysw';
 
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function Sliderx(props) {
  const classes = useStyles();
  
  
  const [value, setValue] = React.useState(30);
  const [horarios, setHorarios] = React.useState(
   {horario : 1, valor: 4, flag : false}
  
  )
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue) ; console.log ("pija", value,hola);
    let newobj = horarios;
    newobj.horario=props.val2;
    newobj.valor=value;
    newobj.flag=props.val1;
    
    setHorarios(newobj) ;
   // console.log(horarios,"state con todo",newobj);
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
        defaultValue={3}
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
      
        
   <p>
    <Guardaymuestrasliderx val3={horarios} ></Guardaymuestrasliderx>       
     </p>    
     
    </div>
  );
}