import React, { useEffect, useState } from 'react';

const Clock = () => {


   const information = {
    date: new Date(),
    name: 'Armando',
    age: 0,
    lastName: 'Moreno'
    
   }
   const [age, setAge] = useState(information.age)
   const [dateTime, setDateTime] = useState(information.date);


    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
            setAge(age + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, );



    return (
        <div>
            <h2>
            Hora Actual: 
            { `${dateTime.toLocaleTimeString()}` }
            </h2>
            <h3>{ information.name } { information.lastName }</h3>
            <h1>Edad: {`${age}`} </h1>
        </div>
    );

  
}

export default Clock;
