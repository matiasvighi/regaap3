
import React from 'react';
import { useEffect } from 'react';
import axios from "axios";



export default function Guardaymuestrasliderx(props) {
console.log("pija",props.val3)

//const [horarios, setHorarios] = React.useState({})
//let newArray = horarios;
//newArray[props.val3.horario].horario=props.val3.horario;
//newArray[props.val3.horario].valor=props.val3.valor;
//newArray[props.val3.horario].flag=props.val3.flag;
 
useEffect(() => {
    console.log("useeffect");
    var userid = 1
    //var id= props.val3.horario +101
    var comp= {...props.val3,userid}
   // console.log(comp,"lo que mando")
    //setHorarios(props.val3) ;
   axios.post("https://jsonplaceholder.typicode.com/posts/", comp)
   .then((response) =>{
       const {data} = response;
       console.log("respuesta",data,);
   });
   
});
  //  props.val4?console.log("hago el post"):console.log("no hago el post")
    //esto en realidad es al pedo que sea un state por que la "iteración", viene dada por el componente anterior al anterior (switches.js).
    //se puso en un state por motivos de estudio del uso de states. también se podría resolver todo en un solo componente.
    
    


//console.log(horarios,"state con todo",newArray);

return(
<div></div>
)
}