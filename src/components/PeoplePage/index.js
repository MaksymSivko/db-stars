import React, { Component } from 'react';
import { ItemDetails } from '../ItemDetails';
import { ItemList } from '../ItemList';
import { SwapiService } from '../../services/swapi-servisec';
import { Row } from '../Row';
import { ErrorBoundry } from '../ErrorBoundry';

import './style.css';

export class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 11
    };

    onPersonSelected = selectedPerson => {
        this.setState({ selectedPerson });
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItems={({ name, birthYear }) =>
                    `${name} - (${birthYear})`
                }
            />
        );
        const itemDetails = (
            <ItemDetails personId={this.state.selectedPerson} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        );
    }
}
