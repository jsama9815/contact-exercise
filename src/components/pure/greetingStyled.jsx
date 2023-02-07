import React, { useState } from 'react';

//Definiendo estilos en constate

//? Estilos para usuario logueado
const loggedStyle = {
    color: 'white',
}

//?Estilos para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    
    // Generamos un estado para el componente y asi controlar 
    // si el usuario esta logueado o no
    const [logged, setLogged] = useState(false)

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please Login</p>)

    return (
        <div style={ logged ? loggedStyle : unLoggedStyle }>
        {logged ? greetingUser() : pleaseLogin() }
        <button onClick={() => { 
            console.log('boton pulsado');
            setLogged(!logged);
        }}>
            { logged ? 'LogOut' : 'Login' }
        </button>
        </div>
    );
}

export default GreetingStyled;
