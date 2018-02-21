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

render() {
    return (
        <React.Fragment>
            <Header/>
            <ContactList contacts={this.state.contacts} />
        </React.Fragment>
    )
    }
};
