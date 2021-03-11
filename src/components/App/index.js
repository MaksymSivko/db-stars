import React, {Component} from 'react';
import {Header} from '../Header';
import {ErrorBoundry} from '../ErrorBoundry';
import {RandomPlanet} from '../RandomPlanet';
import {PeoplePage} from '../Pages/people-page';
import {PlanetPage} from '../Pages/planet-page';
import {StarshipPage} from '../Pages/starship-page';

import {SwapiService} from '../../services/swapi-service';
import {DummySwapiService} from '../../services/dummy-swapi-service';

import {SwapiServiceProvider} from '../Swapi-service-context';

import './style.css';

export class App extends Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <RandomPlanet/>

            <PeoplePage/>

            <PlanetPage/>

            <StarshipPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
