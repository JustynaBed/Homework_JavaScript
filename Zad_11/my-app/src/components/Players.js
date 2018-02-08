import React from 'react';
import { Link } from 'react-router-dom';
import {players} from '../data/players';

export default () => {
    const playerIds = Object.keys(players);
    return <React.Fragment>
        <table>
            {playerIds
                .map(id => <li key={id}><Link to={`/player/${id}`}>{players[id].name}</Link></li>)
            }
        </table>
    </React.Fragment>
}