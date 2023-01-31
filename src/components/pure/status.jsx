import React from 'react';
import PropTypes from 'prop-types';
import {  contact } from '../../models/contact.class'


const contactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Last name: { contact.lastName }
            </h3>
            <h4>
                Email: { contact.Mail }
            </h4>
            <h5>
                Estatus: { contact.status ? 'En linea' : 'No disponible' }
            </h5>
        </div>
    );
};


contactComponent.propTypes = {
    contact: PropTypes.instanceOf(contact)
};


export default contactComponent;
