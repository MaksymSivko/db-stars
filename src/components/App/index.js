import React, { Component } from 'react';

import './style.css';

import { Header } from '../Header';
import { RandomPlanet } from '../RandomPlanet';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';
import { ErrorIndicator } from '../ErrorIndicator';
import { ErrorButton } from '../ErrorButton';
import { PeoplePage } from '../PeoplePage';
import { SwapiService } from '../../services/swapi-servisec';

export class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState(state => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className="stardb-app">
                <Header />
                {planet}

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}
                    >
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />
            </div>
        );
    }
}
