import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BoxWithInsetShadow from '../BoxWithInsetShadow';
import breakpoints from '../../config/bootstrap-breakpoints'

class SpotListItem extends Component {
  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { id, thumbnail, name, description } = this.props.spot;
    const largeDevice = window.innerWidth >= breakpoints.tablet;
    return (
      <Link to={`/spot/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <li className="media mb-2">
            <img src={thumbnail || 'http://placehold.it/50x50'} className="mr-3" alt="Thumbnail" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">{name}</h5>
              <div className="row" style={{color: '#6c757d'}}>
                <div className="col-md-6">
                  <h6 className="mt-0 mb-1">{name} subtitle</h6>
                </div>
                <div className="col-md-3" style={{textAlign: largeDevice ? 'center' : 'left'}}>
                  3.4km away
                </div>
                <div className="col-md-3" style={{textAlign: largeDevice ? 'right' : 'left'}}>
                  ★★★★☆
                </div>
              </div>
              
              <BoxWithInsetShadow text={description} lines={largeDevice ? 5 : 3} />
            </div>
        </li>
      </Link>
    )
  }
}

export default SpotListItem;
