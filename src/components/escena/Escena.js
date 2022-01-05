import React from "react";
import {Bordes} from '../../styled'



const Escena = props =>{
return   <div>
{    props.historia.map((data, key)=>{
        return (
         <Bordes><li key={key}>{data}</li></Bordes>   
        )
    })
}
</div>
 }
export default Escena;