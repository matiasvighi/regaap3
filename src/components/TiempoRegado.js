import * as React from 'react';


import Button from '@material-ui/core/Button';


export default function TiempoRegado() {
  
var boton = ["outlined","contained","outlined","outlined","outlined","outlined"]


    return (
        <p>
          
          <Button variant={boton[0]}>Asp1</Button>
          <Button variant={boton[1]}>Asp2</Button>
          <Button variant={boton[2]}>Asp3</Button>
          <Button variant={boton[3]}>Asp4</Button>
          <Button variant={boton[4]}>Asp5</Button>
          <Button variant={boton[5]}>Asp8</Button>
        </p>
      );
    }

//en la versión correcta de react es solo Button no raised button y en lugar de p va 
//Stack que a su vez lleva su propio import