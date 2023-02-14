import React, { useState } from "react";
import ContactForm from "../pure/forms/contactForm";
import { contact } from "../../models/contact.class";
import PersonComponent from "../pure/person";
import "../../styles/contact.scss";

const ContactList = () => {
  const defaultContact1 = new contact("Benjamin", "Naranjo", true);
  const defaultContact2 = new contact("Diana", "Alcocer", false);
  const defaultContact3 = new contact("Ingrid", "Moreno", true);

  const [person, setPerson] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  const [ toggleOrders,setToggleOrders ] = useState(false);

  function completePerson(contact) {
    const index = person.indexOf(contact);
    const tempContact = [...person];
    tempContact[index].completed = !tempContact[index].completed;
    setPerson(tempContact);
  }

  function removePerson(contact) {
    const index = person.indexOf(contact);
    const tempContact = [...person];
    tempContact.splice(index, 1);
    setPerson(tempContact);
  }

  function addPerson(contact) {
    const tempContact = [...person];
    tempContact.push(contact);
    setPerson(tempContact);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <i className="bi bi-person-add add-icon" onClick={() => setToggleOrders(!toggleOrders)}></i>
            { toggleOrders && <ContactForm  closeMenu = {() => setToggleOrders(false) } add={addPerson} />}
            <h5>Contacts:</h5>
          </div>
          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col" className="tittle">
                    Name
                  </th>
                  <th scope="col" className="tittle">
                    Last Name
                  </th>
                  <th scope="col" className="tittle">
                    Status
                  </th>
                  <th scope="col" className="tittle"></th>
                </tr>
              </thead>
              <tbody>
                {person.map((contact, index) => {
                  return (
                    <PersonComponent
                      key={index}
                      contact={contact}
                      complete={completePerson}
                      remove={removePerson}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
