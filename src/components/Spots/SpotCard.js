import React from 'react'
import { PropTypes } from 'prop-types';
import breakpoints from '../../config/bootstrap-breakpoints';

class SpotCard extends React.Component {
  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  
  render() {
    const { thumbnail, name, description } = this.props.spot;
    return (
      <div className="card">
        
        {
          window.innerWidth > breakpoints.tablet &&
          <img src={thumbnail} className="card-img-top" alt="Thumbnail" />
        }
        
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name} subtitle</h6>
          <p className="card-text" 
            style={{ 
              overflow: 'hidden',
              maxHeight: '3.6em', 
              lineHeight: '1.2em',
              textAlign: 'justify'
            }}>
            {description}
          </p>
        </div>
      </div>
    )
  }
}

SpotCard.propTypes = {
  spot: PropTypes.object.isRequired
}

export default SpotCard;
