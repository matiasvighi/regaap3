import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import Button from "@material-ui/core/Button";

import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  ViewSwitcher,
  Toolbar,
  DragDropProvider,
  EditRecurrenceMenu,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ContactSupportOutlined, SettingsInputAntennaTwoTone, Today } from '@material-ui/icons';
import { appointments } from '../calendario/appointments';
 
var hola = 1
 
 
export default function WeekView2 (props)
{
  
    console.log(props.val1,"??")

    const [datac, setDatac ] =React.useState(
      props.val1
    )
    const handleClick =() => {
    setDatac([{appointments: "FREQ=DAILY;INTERVAL=3;COUNT=99"}])
    console.log(datac,"datac")  
  }

   var data = props.val1   
  
 
      
       console.log(data)

 
  const commitChanges =(datac) => {setDatac([{appointments: "FREQ=DAILY;INTERVAL=1;COUNT=99"}])}
    

    return (
      
      
       
      <Paper>
        <Button id="1" variant="outlined" onClick={handleClick}>pito</Button>
        
        <Scheduler
      
 
          data={datac}
         
        >
 
        
          <ViewState
            defaultCurrentDate={Today}
          />
           <EditingState
            onCommitChanges={commitChanges}
          />
          
          <WeekView
            startDayHour={9}
            endDayHour={15}
          />
          <MonthView />
          <Appointments />
 
          <Toolbar />
          <ViewSwitcher />
 
          <EditRecurrenceMenu />
 
          <DragDropProvider />
        </Scheduler>
      </Paper>
      
    );
     
 
    }