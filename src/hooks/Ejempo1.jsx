// Ejemplo de uso del hook useState
// Crear un componente de tipo funcion y acceder a su estado privado
// a traves de un hook y poder modificarlo

import React, { useState } from 'react';

const Ejempo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'pepe_zony@hotmail.com'
    }

    // Queremos que el valor inicial y persona inicial sean 
    // parte del estado del componente para asi poder gestionar su cambio y 
    // este se vea reflejado en la vista del componente 
    // const[nombreVariable, funcionparacambiar] =useState(initialState)
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // funcion para actualizar el estado privado que contiene el contador    
    function incrementarContador(){
        // funcionparacambiar(nuevoValor)
        setContador(contador + 1);
    }

    // funcion para actualizar el estado de la persona
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Armando',
                email: 'j.armando@hotmail.com'
            }
        )
    }


    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: { contador }</h2>
            <h2>Informacion de la persona</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email } </h3>
            {/* Bloque de botones para la actualizacion del estado */}
            <div>
                <button onClick={ incrementarContador }>Incrementar contador</button>
                <button onClick={ actualizarPersona }>Actualizar persona</button>
            </div>
        </div>
    );
}

export default Ejempo1;
