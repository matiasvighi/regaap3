import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
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
  
    console.log(props.val1[0].rRule,"??")
  
     var data = props.val1   
  
 
      
       console.log(data)

 
  var commitChanges = data[0]
    

    return (
       
      <Paper>
        
        <Scheduler
      
 
          data={data}
         
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