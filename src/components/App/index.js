import React, { Component } from 'react';
import { Header } from '../Header';
import { ErrorIndicator } from '../ErrorIndicator';
import { ItemDetails, Record } from '../ItemDetails';
import { SwapiService } from '../../services/swapi-servisec';
import { Row } from '../Row';
import { ErrorBoundry } from '../ErrorBoundry';
// import { RandomPlanet } from '../RandomPlanet';
// import { ErrorButton } from '../ErrorButton';
// import { PeoplePage } from '../PeoplePage';
// import { ItemList } from '../ItemList';

import './style.css';

export class App extends Component {
    swapiService = new SwapiService();

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

        // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <Row left={personDetails} right={starshipDetails} />

                    {/* {planet}

                <div className="row mt-5 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}
                    >
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />*/}

                    {/* <div className="row mt-5">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItems={item => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson} />
                    </div>
                </div> */}

                    {/* <div className="row mt-5">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItems={item => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson} />
                    </div>
                </div> */}
                </div>
            </ErrorBoundry>
        );
    }
}
