import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  state = {
    value: ''
  }

  onChange = e => this.setState({value: e.target.value})

  render() {
    return (
      <div className="input-group mb-3">
        <input 
          type="text"
          className="form-control"
          placeholder="Search for a location or a skatespot"
          onChange={this.onChange}
        />

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.props.onSubmit.bind(this, this.state.value)}>
            Search
          </button>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;
