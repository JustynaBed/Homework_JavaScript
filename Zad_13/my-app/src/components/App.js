import React from 'react';
import '../css/style.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';

export default class extends React.Component {

    state = {
        contacts: [
            {
                id: '1',
                name: 'Kazia Butkiewicz',
                phone: '10101000',
                email: 'kazimiera@pw.moc',
                category: 'Rodzina'
            },
            {
                id: '2',
                name: 'Zofia Przesławska',
                phone: '10101080',
                email: 'zoska@pw.moc',
                category: 'Praca'
            },
            {
                id: '3',
                name: 'Buromir Mirobirski',
                phone: '80101000',
                email: 'buro@pw.moc',
                category: 'Nasza Klasa'
            }
        ]
    };

    updateContact = (contactId, updatedContact) => {
        this.setState({
            contacts: this.state.contacts.map(
                contact =>
                    contact.id !== contactId
                        ? contact
                        : {
                            ...contact,
                            ...updatedContact
                        }
            )
        })
    };

    addContact = ({ contactName, contactPhone, contactEmail, contactCategory }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phone: contactPhone,
                email: contactEmail,
                category: contactCategory
            })
        })
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                <ContactList
                    contacts={this.state.contacts}
                    removeContact={this.removeContact}
                    updateContact={this.updateContact}/>
                <AddContact addContact={this.addContact}/>
            </React.Fragment>
        )
    }
};
