import React from 'react';
import { ItemList } from '../../ItemList';
import { withData } from '../../HOC/with-data';
import { withChildFunction } from '../../HOC/with-child-function';
import { withSwapiService } from '../../HOC/with-swapi-service';
import { compose } from '../../HOC/compose';

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

export const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
