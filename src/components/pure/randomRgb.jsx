import React, { useState } from 'react';

const RandomRgb = () => {

    const colorRgb = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        return  `rgb(${red},${green},${blue})`;
    }

    const [mouse, setMouse] = useState(false);
    const [color, setColor] = useState(false);

    const handleDoubleClick = () => {
        setColor(!color);
    }
    
    
    return (    
       <div style={{
        height: '250px',
        width: '250px',
        backgroundColor: color ? 'black' : (mouse ? colorRgb() : 'black')
       }}
       onMouseEnter = {() => setMouse(true)}
       onMouseLeave = {() => setMouse(false)}
       onDoubleClick = { handleDoubleClick}
       />
    );
}

export default RandomRgb;
