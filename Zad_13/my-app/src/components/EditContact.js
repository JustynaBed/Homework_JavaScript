import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditContact extends Component {
    state = {
        contactName: this.props.name,
        contactPhone: this.props.phone,
        contactEmail: this.props.email,
        contactCategory: this.props.category
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.updateContact(this.props.contactId, {
            ...this.state,
            name: this.state.contactName,
            phone: this.state.contactPhone,
            email: this.state.contactEmail,
            category: this.state.contactCategory
        })
    };

    renderInput(fieldName) {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.renderInput('contactName') }
                { this.renderInput('contactPhone') }
                { this.renderInput('contactEmail') }
                { this.renderInput('contactCategory') }

                <button>
                    <i class="material-icons">attach_file</i>
                </button>
            </form>
        )
    }
}

export default connect(null, dispatch => ({
    updateContact: (contactId, updatedContact) =>
        dispatch({
            type: 'UPDATE_CONTACT',
            contactId,
            updatedContact
        })
}))(EditContact)