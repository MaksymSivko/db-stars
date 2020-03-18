import React from 'react';
import { ItemDetails, Record } from '../../ItemDetails';
import { withSwapiService } from '../../HOC/with-swapi-service';

export const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(PlanetDetails, mapMethodToProps);
