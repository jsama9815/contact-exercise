/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase y 
 * el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Elemnto antes de que el componente sea anadido al DOM')
    }

    render() {
        return (
            <div>
            <h1>
                DidMount
            </h1>
                
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
      console.log('Elemnto antes de que el componente sea anadido al DOM');
    }, [])
    

    return (
        <div>
            <h1>
                DidMount
            </h1>
            </div>
    );
}
