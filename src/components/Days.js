import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import WeekView2 from './WeekView2';
import { appointments } from '../calendario/appointments';

export default function Days() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  console.log(alignment);
  appointments[0].rRule = "FREQ=DAILY;INTERVAL=2;COUNT=99"
  appointments[0].id = 2
  
  console.log(appointments[0].rRule)
  console.log(appointments[0].id)
  console.log(appointments[0].exDate)

  
   };
   

   
  
   return (
    
<p>

    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        
      
        <p>Todos</p>
        

      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
      Dia por medio
      
       
     </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
      <p>Cada dos dias</p>
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" >
      <p>Cada 3 dias</p>
      </ToggleButton>
      <ToggleButton value="tuvieja" aria-label="justified" >
      <p>Cada 4 dias</p>
      </ToggleButton>
      <ToggleButton value="tu hermsana" aria-label="justified" >
      <p>Una vez por semana</p>
      </ToggleButton>
     
    </ToggleButtonGroup> 
     
      <p>
      <WeekView2 val1={appointments}> </WeekView2>
      
      </p>
  </p>    
  );
  

}