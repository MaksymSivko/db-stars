import React, { Component } from 'react';
import { Spinner } from '../Spinner';
import { ErrorIncator } from '../ErrorIncator';
import { SwapiService } from '../../services/swapi-servisec';

import './style.css';

export class RandomePlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.upadatePlanet();
        this.interval = setInterval(this.upadatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false });
    };

    onErrore = err => {
        this.setState({
            error: true,
            loading: false
        });
    };

    upadatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrore);
    };

    render() {
        const { planet, loading, error } = this.state;
        const errorMessage = error ? <ErrorIncator /> : null;
        const hasDate = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const conten = hasDate ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {conten}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img
                className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="img"
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};
