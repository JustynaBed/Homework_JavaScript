import React from 'react';

export default class ContactList extends React.Component {
    render() {
        const { contacts } = this.props
        return <ul>{contacts.map(contact =>
                  <li key={ contact.id }><strong>{ contact.name },</strong>
                  <br /> { contact.phone }, {contact.email }
                  </li>)}
               </ul>
    }
};



