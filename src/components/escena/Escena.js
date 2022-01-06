import React, { useState } from "react";
import { Bordes, Boton, BackgroundMain } from '../../styled'



const Escena = props => {
    const [pestaña, setPestaña] = useState(0);
    const next = () => {
       if (pestaña < 3) {
           setPestaña(pestaña + 1)};
    }
    const previous = () => {
        if (pestaña > 0) {
            setPestaña(pestaña - 1)};
    }
    console.log(props.historia[0].img)
    return <BackgroundMain back={props.historia[pestaña].img} >
        
        <Boton onClick={() => previous()}>Anterior</Boton>
        <Boton onClick={() => next()}>Següent</Boton>

        {props.historia.map((data, key) => {
            return (
                <Bordes key={key}
                isSelected={key == pestaña ? true : false} ><li key={key}>{data.txt}</li></Bordes>
            )
        })
        }
    </BackgroundMain>
}
export default Escena;