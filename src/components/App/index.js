import React, { Component } from 'react';
import { Header } from '../Header';
// import { ItemDetails, Record } from '../ItemDetails';
import { SwapiService } from '../../services/swapi-service';
import { ErrorBoundry } from '../ErrorBoundry';
import { RandomPlanet } from '../RandomPlanet';
import { Row } from '../Row';
// import { ErrorIndicator } from '../ErrorIndicator';
// import { ErrorButton } from '../ErrorButton';
// import { PeoplePage } from '../PeoplePage';
// import { ItemList } from '../ItemList';

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

        // const {
        //     getPerson,
        //     getStarship,
        //     getPersonImage,
        //     getStarshipImage
        //     // getAllPeople,
        //     // getAllPlanets
        // } = this.swapiService;

        // const personDetails = (
        //     <ItemDetails
        //         itemId={11}
        //         getData={getPerson}
        //         getImageUrl={getPersonImage}
        //     >
        //         <Record field="gender" label="Gender" />
        //         <Record field="eyeColor" label="Eye Color" />
        //     </ItemDetails>
        // );

        // const starshipDetails = (
        //     <ItemDetails
        //         itemId={5}
        //         getData={getStarship}
        //         getImageUrl={getStarshipImage}
        //     >
        //         <Record field="model" label="Model" />
        //         <Record field="length" label="Length" />
        //         <Record field="costInCredits" label="Cost" />
        //     </ItemDetails>
        // );

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
