import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";

class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <SearchBar onSubmit={value => {console.log(value)}} />
      </React.Fragment>
    )
  }
}

export default Home;