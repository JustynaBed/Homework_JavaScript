import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/players';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = items[playerToDisplay];

const style ={
    background: 'beige'
    };

    return player?
        <Card style={style}>
            <CardHeader><b>Id:</b> {player.id}</CardHeader>>
            <CardHeader><b>Name:</b> {player.name}</CardHeader>
            <CardText><b>Level:</b> {player.level}</CardText>
            <CardText><b>Short motto in life:</b> {player.desc}</CardText>
            <Link to='/'><button>Go back and see other players</button></Link>

        </Card>
        :
        <p>Brak produktu</p>
};