import React from 'react';
import { contact } from  '../../models/contact.class';
import ContactComponent from '../pure/status';

const contactListComponent = () => {
    
    const defaultContact = new contact('Benjamin', 'Naranjo', 'pepe_zony@hotamail.com' , false);

    // changeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea');
    // }

    return (
        <div>
            <div>
                <h1>
                    Your Contact:
                </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <ContactComponent contact={ defaultContact }></ContactComponent>
        </div>
    );
};

export default contactListComponent;