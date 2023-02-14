import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

   function pressButton(){
    const text = messageRef.current.value;
    alert(`Text in input ${text} `)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitForm(e){
        // Se utiliza para que la pagina no se refresque
        // cada que le piquemos al boton
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On mouse Over')}>Hello, {name}</p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Boton 1
            </button>
            <button onClick={() => pressButton()}>
                Boton 2
            </button>
            <button onClick={() => (pressButtonParams('Hello'))}>
                Boton 3
            </button>
            <input 
            onFocus={() => console.log('Focus')}
            onChange={(e) => console.log('input changed:', e.target.value)}
            onCopy={() => console.log('copy text from input')}
            placeholder = 'Send a text to your father'
            ref={messageRef}
             />
             <button onClick={() => send(messageRef.current.value)}>Send Message</button>
             <div style={{marginTop: '20px' }}>
                <form onSubmit={ submitForm }>
                    <input 
                    ref={nameRef} 
                    placeholder='New Name'
                    />
                    <button type='Submit'>Update Name</button>
                </form>
             </div>
        </div>
    );
}

export default Child;
