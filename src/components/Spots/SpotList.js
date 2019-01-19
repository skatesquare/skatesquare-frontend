import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotCard from './SpotCard';

class SpotList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.spots.map(spot => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <SpotCard key={spot._id} spot={spot} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.spots.list
})

export default connect(mapStateToProps)(SpotList);
