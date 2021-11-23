import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import WeekView2 from './WeekView2';
import { appointments } from '../calendario/appointments';
import { Appointments } from '@devexpress/dx-react-scheduler';

export default function Days() {
  const [alignment, setAlignment] = React.useState("FREQ=DAILY;INTERVAL=1;COUNT=99");
  const [appoitmentsL, setAppointmentsL] = React.useState ();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  console.log(alignment,"alignment");
  var basofia = []
  basofia= appointments
  basofia[0].rRule=alignment
  
  
  setAppointmentsL([basofia[0]])

  
  
  console.log(appoitmentsL,"appointmentsl")
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
      <ToggleButton value="'FREQ=DAILY;INTERVAL=1;COUNT=99'," 
      aria-label="left aligned">
        
      
        <p>Todos</p>
        

      </ToggleButton>
      <ToggleButton value="'FREQ=DAILY;INTERVAL=2;COUNT=99',"
       aria-label="centered">
      Dia por medio
      
       
     </ToggleButton>
      <ToggleButton value='FREQ=DAILY;INTERVAL=3;COUNT=99' 
      aria-label="right aligned">
      <p>Cada dos dias</p>
      </ToggleButton>
      <ToggleButton value="'FREQ=DAILY;INTERVAL=4;COUNT=99',"
       aria-label="justified" >
      <p>Cada 3 dias</p>
      </ToggleButton>
      <ToggleButton value="'FREQ=DAILY;INTERVAL=5;COUNT=99',"
       aria-label="justified" >
      <p>Cada 4 dias</p>
      </ToggleButton>
      <ToggleButton value="'FREQ=DAILY;INTERVAL=6;COUNT=99',"
       aria-label="justified" >
      <p>Una vez por semana</p>
      </ToggleButton>
     
    </ToggleButtonGroup> 
     
      <p>
      <WeekView2 val1={appoitmentsL}> </WeekView2>
      
      </p>
  </p>    
  );
  

}