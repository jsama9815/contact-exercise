import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue = 150;

const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button  style={ propStyle } onClick={ loginAction }>Login</button>
    );
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={ propStyle } onClick={ logoutAction }>Logout</button>
    );
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion

//? Estilos para usuarios loggeados

const loggedStyle = {
    color: 'white',
    backgroundColor: `rgb(${red},${green},${blue})`,
    fontWeight: 'bold',
};

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setnMessage] = useState(0)

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }
    let optionalButton;

    // if(access) optionalButton = <button onClick={ updateAccess }>Logout</button>;
    // else   optionalButton = <button onClick={ updateAccess }>Login</button>;

    if(access) optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction = { logoutAction } ></LogoutButton>
    else   optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={ loginAction }></LoginButton>

    //unread message
    let addMessages = () => {
        setnMessage(nMessage + 1)
    }

    return (
        <div>
            {/* Optional button */}
            { optionalButton }
            {/* n Messages unread */}
            {/* { nMessage === 1 && <p>You have { nMessage }  message unread</p> }
            { nMessage > 1 && <p>You have { nMessage }  messages unread</p> }
            { nMessage === 0 && <p>There are no new message</p>  } */}
            {/* Ternary Operator */}
            {access ? (
            <div>
            { nMessage > 0 ?
            <p>You have { nMessage }  message unread</p> :
            <p>There are no new message</p> }
            <button onClick={ addMessages }>{ nMessage === 0 ? 'Add your first message' : 'Add more messages' }</button>
            </div>)
            : null}
        </div>
    );
}

export default OptionalRender;
