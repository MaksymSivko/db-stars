import React, { Component } from 'react';
import { SwapiService } from '../../services/swapi-servisec';
import { Spinner } from '../Spinner';

import './style.css';

export class PlenetDetails extends Component {
    swapiService = new SwapiService();

    state = {
        plenet: null,
        hesError: false
    };

    render() {
        if (!this.state.plenet) {
            return (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2>Select a person from a list</h2>
                    <Spinner />
                </div>
            );
        }

        return (
            <div className="person-details card">
                <h2>PlenetDetails</h2>
                <Spinner />
            </div>
        );
    }
}
