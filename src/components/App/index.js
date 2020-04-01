import React, { Component } from 'react';
import { Header } from '../Header';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import { PeoplePage } from '../Pages/people-page';
import { PlanetPage } from '../Pages/planet-page';
import { StarshipPage } from '../Pages/starship-page';

import { SwapiService } from '../../services/swapi-service';
import { DummySwapiService } from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../Swapi-service-context';

import './style.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import StarshipDetails from '../sw-components/Starship-details';
import PersonDetails from '../sw-components/Person-details';
import PlanetDetails from '../sw-components/Planet-details';

export class App extends Component {
  state = {
    swapiService: new SwapiService()
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

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet updataInterval={5000} />

              <Route
                path="/"
                exact
                render={() => <h2> Welcome To StarDB</h2>}
              />

              <Route path="/people" exact component={PeoplePage} />
              <Route
                path="/people/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <PersonDetails itemId={id} />;
                }}
              />

              <Route path="/planet" exact component={PlanetPage} />
              <Route
                path="/planet/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <PlanetDetails itemId={id} />;
                }}
              />

              <Route path="/starship" exact component={StarshipPage} />
              <Route
                path="/starship/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
