import React, { Component } from 'react'
import { connect } from 'react-redux'

const initialState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
};

class AddContact extends Component {
    state = initialState;

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState(initialState)
    };

    renderInput(fieldName) {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                onChange={this.handleChange}
            />
        )
    };

    render() {
       return (
          <form onSubmit={this.handleSubmit}>
              <h1 className="header">Add new contact</h1>
                 Name: {this.renderInput('contactName')}<br />
                 Phone: {this.renderInput('contactPhone')}<br />
                 Email: {this.renderInput('contactEmail')}<br />
                 Category: {this.renderInput('contactCategory')}
              <button disabled={!this.state.contactPhone}><i class="material-icons">add_circle</i></button>
          </form>
       )
    }
}

export default connect (
    state => ({
        contacts: state.data
    }),
    dispatch => ({
        addContact: ({ contactName, contactPhone, contactEmail, contactCategory }) =>
            dispatch({
                type: 'ADD_CONTACT',
                contactName,
                contactPhone,
                contactEmail,
                contactCategory
            })
    })
)(AddContact)