import React from 'react';
import { Link } from 'react-router-dom';
import players from "../data/players";
import {
    Table,
    TableHeader,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default () => {
    let state = {
        showCheckboxes: false,
        displayRowCheckbox: false,
        displaySelectAll: false,
        showRowHover: true,
    };

    const playerIds = Object.keys(players);
    return <React.Fragment>
        <Table>
            <TableHeader displaySelectAll={state.showCheckboxes}
                adjustForCheckbox={state.showCheckboxes}
                enableSelectAll={state.enableSelectAll}>
                <TableRow>
                    <TableHeaderColumn style={{textAlign: 'center'}}>Level</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: 'center'}}>Id</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={state.showCheckboxes}
                showRowHover={state.showRowHover}>
            {playerIds
                .map(id =>
                    <TableRow key={id}>
                        <TableRowColumn style={{textAlign: 'center'}}><Link to={`/player/${id}`}>{players[id].name}</Link></TableRowColumn>
                        <TableRowColumn style={{textAlign: 'center'}}>{ players[id].level }</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </React.Fragment>
};
