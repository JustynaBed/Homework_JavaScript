import React from 'react';
import ToggleEditContact from './ToggleEditContact';

export default class ContactList extends React.Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {
        const { contacts } = this.props
        return (<ul>{contacts.map(contact =>
                  <li key={ contact.id }><strong>{ contact.name },</strong>
                  <br /> { contact.phone }, { contact.email }
                  <br /> [{ contact.category }]
                  <button data-contact-id={ contact.id } onClick={ this.handleRemoveClick }>
                      <i class="material-icons">delete</i>
                  </button>
                   <ToggleEditContact
                          contact={ contact }
                          updateContact={ this.props.updateContact }/>
                  </li>)}
               </ul>)
    }
};



