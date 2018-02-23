import React, { Component } from 'react'

import EditContact from './EditContact'


class ToggleEditContact extends Component {
    state = {
        showEditForm: false
    };

    render() {
        const { contact } = this.props;
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ showEditForm: !this.state.showEditForm })}>
                    <i class="material-icons">edit</i>
                </button>
                {this.state.showEditForm && (
                    <EditContact
                        contactId={ contact.id }
                        name={ contact.name }
                        email={ contact.email }
                        phone={ contact.phone }
                        category={ contact.category }
                        updateContact={ this.props.updateContact} />
                     )
                }
            </React.Fragment>
        )
    }
}

export default ToggleEditContact
