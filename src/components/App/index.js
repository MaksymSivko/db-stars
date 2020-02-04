import React, { Component } from 'react';
import { Header } from '../Header';
import { SwapiService } from '../../services/swapi-service';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import { Row } from '../Row';

import { PersonDetails, PlanetDetails, StarshipDetails } from '../Details';

import { PersonList, PlanetList, StarshipList } from '../ListItem';

import './style.css';

export class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState(state => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    {planet}

                    <Row
                        left={<PersonList />}
                        right={<PersonDetails itemId={11} />}
                    />

                    <Row
                        left={<PlanetList />}
                        right={<PlanetDetails itemId={5} />}
                    />

                    <Row
                        left={<StarshipList />}
                        right={<StarshipDetails itemId={9} />}
                    />
                </div>
            </ErrorBoundry>
        );
    }
}
