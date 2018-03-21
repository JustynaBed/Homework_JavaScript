import React, { Component } from 'react';
import { connect } from 'react-redux'

import ToggleEditContact from './ToggleEditContact';


class ContactList extends Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <ul>{ contacts.map(contact => {
                    let splitCategory = contact.category.split(',');
                    for (let i=0; i < splitCategory.length; i++){
                    splitCategory[i]= ' [' + splitCategory[i] + ']';
                    }
                    splitCategory = splitCategory.join(',');

                return (
                  <li key= { contact.id }>
                     <strong>{ contact.name },</strong>
                     <br /> { contact.phone }, { contact.email }
                     <br /> { splitCategory }
                     <button data-contact-id={ contact.id } onClick={ this.handleRemoveClick }>
                     <i class="material-icons">delete</i>
                     </button>
                     <ToggleEditContact
                        contact={ contact }/>
                  </li>
                  )
                }
              )
            }
                </ul>
            </React.Fragment>
        )
    }
};


export default connect(
    state => ({
        contacts: state.contacts.data
    }),

    dispatch => ({
        removeContact: contactId =>
            dispatch({
                type: 'REMOVE_CONTACT',
                contactId
        })
    })

)(ContactList)




