import React, { Component } from 'react';
import { Header } from '../Header';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import PeoplePage from '../Pages/people-page';
import StarshipPage from '../Pages/starship-page';
import { PlanetPage } from '../Pages/planet-page';
import { LoginPage } from '../Pages/login-page';
import { SecretPage } from '../Pages/secret-page';

import { SwapiService } from '../../services/swapi-service';
import { DummySwapiService } from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../Swapi-service-context';

import './style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StarshipDetails from '../sw-components/Starship-details';
import PlanetDetails from '../sw-components/Planet-details';

export class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet updataInterval={5000} />

              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <h2 style={{ textAlign: 'center' }}> Welcome To StarDB</h2>
                  )}
                />
                <Route path="/people/:id?" component={PeoplePage} />
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
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />

                {/* <Redirect to="/" /> */}
                <Route render={() => <div>Page not found !!!</div>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
