import React, { useState } from "react";
import { Bordes, Boton } from '../../styled'



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

    return <div>
        <Boton onClick={() => previous()}>Anterior</Boton>
        <Boton onClick={() => next()}>Següent</Boton>

        {props.historia.map((data, key) => {
            return (
                <Bordes key={key} isSelected={key == pestaña ? true : false} ><li key={key}>{data}</li></Bordes>
            )
        })
        }
    </div>
}
export default Escena;