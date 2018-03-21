import React from 'react';

import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';
import { Provider } from 'react-redux'
import store from '../store'

import '../css/style.css';


export default class extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header/>
                    <ContactList/>
                    <AddContact />
                </React.Fragment>
            </Provider>
        )
    }
};
