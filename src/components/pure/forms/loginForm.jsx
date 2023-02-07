/**
 * Componente que va a contoner un formulario para 
 * autenticacion para usuarios.
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = {
        user: '',
        password: '',
    };

    const [credentials, setCredentials] = useState(initialCredentials);


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
