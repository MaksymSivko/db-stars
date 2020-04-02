import React from 'react';
import { Row } from '../Row';
import { PersonList } from '../sw-components/ListItem';
import PersonDetails from '../sw-components/Person-details';

import { withRouter } from 'react-router-dom';

// export class PeoplePage extends Component {
//   state = {
//     selectedItem: null
//   };

//   onItemSelected = selectedItem => {
//     this.setState({ selectedItem });
//   };

//   render() {
//     const { selectedItem } = this.state;

//     return (
//       <Row
//         left={<PersonList onItemSelected={this.onItemSelected} />}
//         right={<PersonDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PersonList onItemSelected={id => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
