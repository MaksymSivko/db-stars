import React, { Component } from 'react';
import { Header } from '../Header';
import { SwapiService } from '../../services/swapi-service';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import { Row } from '../Row';

import { SwapiServiceProvider } from '../Swapi-service-contecxt';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components/Details';

import {
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/ListItem';

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
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            {planet}

            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />

            <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />

            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={9} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
