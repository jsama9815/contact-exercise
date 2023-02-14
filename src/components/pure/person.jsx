import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../models/contact.class'
import '../../styles/contact.scss';

const Person = ({contact, complete, remove}) => {


    function contactCompletedIcon(){
        if(contact.completed) return (<i onClick={() => complete(contact)} className="bi-toggle-on status" style={{ color: "green", fontWeight: "bold" }}></i>)
        else return (<i onClick={() => complete(contact)} className="bi-toggle-off status" style={{ color: "grey" }}></i> )
    }


    return (
        <tr className="fw-normal">
      <th>
        <span className="contact">{contact.name}</span>
      </th>
      <td className="align-middle contact">
        <span>{contact.lastName}</span>
      </td>
      <td className="align-middle contact">
        { contactCompletedIcon() }
      </td>
      <td className="align-middle contact">
        <i  onClick={() => remove(contact)} className="bi-trash status" style={{ color: "tomato" }}></i>
      </td>
    </tr>
    );
}


Person.propTypes = {
    contact: PropTypes.instanceOf(contact).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}


export default Person;
