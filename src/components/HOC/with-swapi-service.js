import React from 'react';

import { SwapiServiceConsumer } from '../Swapi-service-context';

export const withSwapiService = mapMethodToProps => Wraprer => {
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
