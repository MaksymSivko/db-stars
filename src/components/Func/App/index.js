import React from 'react';

import './style.css';
import { Header } from '../Header';
import { RandomePlanet } from '../RandomePlanet';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';

export const App = () => {
    return (
        <>
            <Header />
            <RandomePlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </>
    );
};
