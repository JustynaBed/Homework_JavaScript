import React from 'react';

export default class ContactList extends React.Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {
        const { contacts } = this.props
        return (<ul>{contacts.map(contact =>
                  <li key={ contact.id }><strong>{ contact.name },</strong>
                  <br /> { contact.phone }, {contact.email }
                  <br /> [{ contact.category }]
                  <button data-contact-id={contact.id} onClick={this.handleRemoveClick}>
                  remove
                  </button>
                  </li>)}
               </ul>)
    }
};



