import React, { Component } from 'react';
import { SwapiService } from '../../services/swapi-servisec';
import { Spinner } from '../Spinner';

import './style.css';
export class StarshipDetails extends Component {
    swapiService = new SwapiService();

    state = {
        starship: null,
        hesError: false
    };

    render() {
        if (!this.state.starship) {
            return (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2>Select a person from a list</h2>
                    <Spinner />
                </div>
            );
        }
        return (
            <div>
                <h2>StarshipDetails</h2>
            </div>
        );
    }
}
