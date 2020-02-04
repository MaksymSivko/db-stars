import React from 'react';
import { ItemList } from '../ItemList';
import { withData } from '../HOC';
import { SwapiService } from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return props => {
        return <Wrapped {...props}>{fn}</Wrapped>;
    };
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name }) => (
    <span>
        {name} ({model})
    </span>
);

export const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople
);

export const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets
);

export const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships
);
