import React, { Component } from 'react';

import './style.css';
import { Header } from '../Header';
import { RandomePlanet } from '../RandomePlanet';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';
import { ErrorIncator } from '../ErrorIncator';

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
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersone} />
                    </div>
                </div>
            </>
        );
    }
}
