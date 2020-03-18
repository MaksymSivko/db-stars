import React, { Component } from 'react';
import { Row } from '../Row';
import { PlanetList } from '../sw-components/ListItem';
import PlanetDetails from '../sw-components/Planet-details';

export class PlanetPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
