import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  state = {
    value: ''
  }

  onChange = e => this.setState({value: e.target.value})
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Search for a location or a skatespot"
            onChange={this.onChange}
          />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;
