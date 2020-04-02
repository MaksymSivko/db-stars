import React from 'react';
import { StarshipList } from '../sw-components/ListItem';
import { withRouter } from 'react-router-dom';

// import { Row } from '../Row';
// import StarshipDetails from '../sw-components/Starship-details';

// export class StarshipPage extends Component {
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
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }

const StarshipPage = ({ history }) => {
  return <StarshipList onItemSelected={id => history.push(id)} />;
};

export default withRouter(StarshipPage);
