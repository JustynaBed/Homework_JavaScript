// import React from 'react';
// import { Route, BrowserRouter } from 'react-router-dom';
// import {Footer} from "./Footer";
// import { Main } from './Main';
// import {Player} from './Player';
// // import Players from './Players';
//
// export default class extends React.Component {
//     render() {
//         return <BrowserRouter>
//
//                 <React.Fragment>
//             <Main/>
//                 <Route path="/player/:id" component={Player}/>
//             <Footer/>
//                 </React.Fragment>
//         </BrowserRouter>
//     }
// }

import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './Footer';
import Main from './Main';
import Player from './Player';

export default class extends React.Component {
    render() {
        return <BrowserRouter>
            {/*<MuiThemeProvider>*/}
                <React.Fragment>
                    {/*<Main/>*/}
                    <Route path="/" exact component={Main}/>
                    <Route path="/player/:id" component={Player}/>
                    <Footer author="JB"/>
                </React.Fragment>
            {/*</MuiThemeProvider>*/}
        </BrowserRouter>
    }
}