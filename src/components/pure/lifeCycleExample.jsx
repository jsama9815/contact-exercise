// Ejemplo de componente de tipo clase que 
// dispone de los metodos de ciclo de vida

import React, { Component } from "react";

class lifeCycleExample extends Component {
    
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')

    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo')
    
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Sirve para controlar si el componente debe o no actualizarse.
         */
        // return true / false
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate: Justo antes de actualizarse')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount(){
        console.log('componentDidUpdate: Justo antes de desaparecer')
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}


export default lifeCycleExample;
