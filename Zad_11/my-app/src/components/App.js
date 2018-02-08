import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Main from './Main';
import Player from './Player';
import Footer from './Footer';

export default class extends React.Component {
    render() {
        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                    <Header/>
                    <Route path="/" exact component={Main}/>
                    <Route path="/player/:id" component={Player}/>
                    <Footer author="JB"/>
                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
};