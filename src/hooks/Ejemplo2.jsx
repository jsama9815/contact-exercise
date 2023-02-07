// Ejemplo de uso de los siguientes hooks
// -UseState
// -useRef()
// -useEffect()
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos cada uno en estado diferente
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // vamos a crear una referencia con useRef para asociar una variable 
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1);
    }

    function incrementar2(){
        setcontador2(contador2 + 1);
    }

    /**
     * Trabajando con useEfecct
     */

    /**
     * ? caso 1: Ejecutar siempre un snippet de codigo 
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este adentro del useEffect()
     * */ 

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencias a elemento del DOM');
    //     console.log(miRef);
    // })

    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador 1
     * cada vez que haya cambio en contador 1, se ejecuta lo que diga el useEffect
     * en caso de que cambie contador2, no habra ejecucion
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencias a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando cambie contador1 o contador2
     * cada vez que haya cambio en contador 1, se ejecuta lo que diga el useEffect
     * cada vez que haya cambio en contador 2, se ejecuta lo que diga el useEffect
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando referencias a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo de useState, useRef, useEfecct</h1>
            <h2>contador1: { contador1 }</h2>
            <h2>contador2: { contador2 }</h2>
            {/* elemento referenciado */}
            <h4 ref={ miRef }>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar1</button>
                <button onClick={ incrementar2 }>Incrementar2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
