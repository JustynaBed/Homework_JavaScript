import React, { Component } from 'react'

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
    }

      render() {
          return (
             <form onSubmit={this.handleSubmit}>
                 Name: {this.renderInput('contactName')}
                 Phone: {this.renderInput('contactPhone')}
                 Email: {this.renderInput('contactEmail')}
                 Category: {this.renderInput('contactCategory')}
             <button>Add contact</button>
              </form>
          )
       }
    }

export default AddContact