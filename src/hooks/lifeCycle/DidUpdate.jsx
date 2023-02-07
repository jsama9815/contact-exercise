/**
 * Ejemplo de uso de metodo Component DidUpdate en componente clase
 * y uso de hook en componente funcional
 */

import React, { Component,useEffect } from 'react';

export class DidUpdate extends Component {
    DidUpdate(){
        console.log('Comportamiento ciado el componente recibe nuevos props o cambio en su estado privado');
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento ciado el componente recibe nuevos props o cambio en su estado privado');
    },);

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


