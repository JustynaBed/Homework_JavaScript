// import React from 'react';
// // import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import { Link } from 'react-router-dom';
// import { players, tableHead } from '../data/players';
//
//
// export class Main extends React.Component {
//     render() {
//         const playersId = Object.keys(players);
//         return (
//             <table>
//                 <th>{ tableHead[0] }</th>
//                 <th>{ tableHead[1] }</th>
//                 { playersId.map(id =>
//                     <tr>
//                         <td key={id}><Link to={`/player/${id}`}>{ players[id].name }</Link></td>
//                         <td key={id}>{ players[id].level }</td>
//                     </tr>
//                 )}
//             </table>
//         );
//     }
// }

import React from 'react';
import { Link } from 'react-router-dom';
import players from "../data/players";


export default () => {
    const playerIds = Object.keys(players);
    return <React.Fragment>
        <table>
            <thead>
            <tr>
                <td><b>Name</b></td>
            <td><b>Level</b></td>
            </tr>
            </thead>
            <tbody>
            {playerIds
                .map(id =>
                        <tr key={id}>
                            <td><Link to={`/player/${id}`}>{players[id].name}</Link></td><td>{ players[id].level }</td></tr>
                )}
        </tbody>
        </table>
    </React.Fragment>
}
