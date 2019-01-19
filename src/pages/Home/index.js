import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import SpotList from '../../components/Spots/SpotList';

class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <SearchBar onSubmit={value => {console.log(value)}} />
        <SpotList />
      </React.Fragment>
    )
  }
}

export default Home;