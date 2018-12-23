import React from 'react';
import {Card} from 'tabler-react';

class LocationCard extends React.Component {
  render() {
    const { name, description } = this.props;
    return(
      <Card title={name}>
        <Card.Body>
          {description}
        </Card.Body>
      </Card>
    )
  }
}

export default LocationCard;