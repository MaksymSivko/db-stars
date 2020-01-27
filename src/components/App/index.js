import React, { Component } from 'react';

import './style.css';
import { Header } from '../Header';
import { RandomePlanet } from '../RandomePlanet';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';
import { ErrorIncator } from '../ErrorIncator';
import { PlenetDetails } from '../PlenetDetails';
import { StarshipDetails } from '../StarshipDetails';

export class App extends Component {
    state = {
        selectedPersone: 1,
        hasError: false
    };

    onItemSelected = id => {
        this.setState({
            selectedPersone: id
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIncator />;
        }

        return (
            <>
                <Header />
                <RandomePlanet />

                <div className="row mb-2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersone} />
                    </div>
                </div>

                <div className="row mb-2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected} />
                    </div>
                    <div className="col-md-6">
                        <PlenetDetails />
                    </div>
                </div>

                <div className="row mb-2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected} />
                    </div>
                    <div className="col-md-6">
                        <StarshipDetails />
                    </div>
                </div>
            </>
        );
    }
}
