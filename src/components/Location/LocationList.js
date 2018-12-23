import React from 'react';
import LocationCard from './LocationCard';

class LocationList extends React.Component {
  state = {
    locations: [
      { id: 1, name: "Skatepark Landweert", description: "description" },
      { id: 2, name: "Skatepark Wetteling", description: "description" },
      { id: 3, name: "Skatepark The B", description: "description" },
    ]
  }
  render() {
    const {locations} = this.state;
    return(
      <div>
        {locations.map(loc => 
          <LocationCard key={loc.id} name={loc.name} description={loc.description} />
        )}
      </div>
    )
  }
};

export default LocationList;