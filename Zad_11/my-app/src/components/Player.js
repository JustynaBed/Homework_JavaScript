// import React from 'react';
//
// import keys from '../data/players';
//
// export default (key) => {
//     const playerToDisplay = key.match.params.id;
//     const player = keys[playerToDisplay];
//
//     return player?
//         <React.Fragment>
//             <h2>{player.name}</h2>
//             <p>{player.desc}</p>
//             <p>{player.id}</p>
//             <p>{player.level}</p>
//         </React.Fragment>
//         :
//         <p>Brak produktu</p>
// }

import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/players';

export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = items[playerToDisplay];

    return player?
        <React.Fragment>
            <h2>{player.id}</h2>
            <p>{player.name}</p>
            <p>{player.level}</p>
            <p>{player.desc}</p>
            <Link to='/'><button >Wróć i zobacz innych</button></Link>
        </React.Fragment>
        :
        <p>Brak produktu</p>
}