import React, { useState } from "react";


const ComponenteEstado = () =>{

    const [User, setUser] = useState(
        {
            nombre: 'martin',
            puntos: 0
        }
    )

    function userRefresh(){
        setUser ({
            nombre: 'Armando',
            puntos: 10,
        }
        )
    }
    
    return(
        <div>
        <h1>
            Hola { User.nombre }
        </h1>
        <h2>
            Tienes { User.puntos } puntos
        </h2>
        <div>
            <button onClick={ userRefresh }>Utilizar para cambiar de usuario</button>
        </div>
        </div>
    )


}

export default ComponenteEstado;