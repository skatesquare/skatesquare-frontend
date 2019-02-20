import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotListItem from './SpotListItem';
import { fetchSpots } from './../../store/actions/spotActions';

class SpotList extends Component {
  componentWillMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.props.spots.map(spot => (
          <SpotListItem key={spot.id} spot={spot} />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.spots.list
})

export default connect(mapStateToProps, { fetchSpots })(SpotList);
