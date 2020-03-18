import React, { Component } from 'react';
import { Header } from '../Header';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import { Row } from '../Row';

import { SwapiService } from '../../services/swapi-service';
import { DummySwapiService } from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../Swapi-service-context';

import PersonDetails from '../sw-components/Person-details';
import PlanetDetails from '../sw-components/Planet-details';
import StarshipDetails from '../sw-components/Starship-details';

import {
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/ListItem';

import './style.css';

export class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
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
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

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
