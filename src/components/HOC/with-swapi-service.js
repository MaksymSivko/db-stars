import React from 'react';

import { SwapiServiceConsumer } from '../Swapi-service-context';

export const withSwapiService = (Wraprer, mapMethodToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodToProps(swapiService);
          return <Wraprer {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
