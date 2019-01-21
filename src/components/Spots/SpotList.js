import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotListItem from './SpotListItem';

class SpotList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.spots.map(spot => (
          <SpotListItem key={spot._id} spot={spot} />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.spots.list
})

export default connect(mapStateToProps)(SpotList);
