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
    var garlopa = [props.val1]

    const [datac, setDatac ] =React.useState(
      props.val1
    )
    const handleClick =() => {
      
      setDatac([ {
        
          title: 'Regado',
          startDate: new Date(2021, 5, 25, 9, 35),
          endDate: new Date(2021, 5, 25, 11, 30),
          id: 1,
          rRule: 'FREQ=DAILY;INTERVAL=3;COUNT=99',
          exDate: '20180628T063500Z,20180626T063500Z',
          }
          ])
      console.log(datac,"datac")  
    }
    
    
        
      

   var data = props.val1   
  
 
      
       console.log(data)

 
  const commitChanges =(datac) => {setDatac([{appointments: "FREQ=DAILY;INTERVAL=1;COUNT=99"}])}
    

    return (
      
      
       
      <Paper>
        <Button id="1" variant="outlined" onClick={handleClick}>pito</Button>
        
        <Scheduler
      
 
          data={props.val1}
         
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