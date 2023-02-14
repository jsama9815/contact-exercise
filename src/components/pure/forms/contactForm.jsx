import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../../models/contact.class';
import '../../../styles/contactForm.scss';

const ContactForm = ({ add, closeMenu }) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const [toggleClose, setToggleClose] = useState(false);

    function addPerson(e){
        e.preventDefault();
        const newPerson = new contact (
            nameRef.current.value,
            lastNameRef.current.value,
            false,
        )
        add(newPerson);
    }

    const handleCloseMenu = () => {
        setToggleClose(!toggleClose);
        closeMenu();
    }

    return (
        <div className='addBox'>
        <form onSubmit={ addPerson } className='d-flex justify-content align-items-center mb-4'>
             <div className='form-outline flex-fill'>
             <div className = 'heading'>
             <i className="bi bi-x-lg " onClick={ handleCloseMenu }></i>
             </div>
                <input ref={ nameRef }
                id='inputName'
                type='text'
                className='form-control form-control-lg input' 
                required 
                autoFocus 
                placeholder='Name'/>
                <input ref={ lastNameRef } 
                id='inputLastName' 
                type='text' 
                className='form-control form-control-lg' 
                required 
                placeholder='LastName'/>
              </div>
              <button type='submit' className='btn btn-primary btn-lg ms-2 button_add'>Add</button>
        </form>
            
        </div>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
