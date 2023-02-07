/**
 * Ejemplo de uso del metodo Componente WillUnMount para componente clase
 * Ejemplo de uso de Hooks para componente FUncional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
    WillUnMount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {
    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}

