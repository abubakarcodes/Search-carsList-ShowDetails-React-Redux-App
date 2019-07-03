import React, { Component } from "react";
import Search from "../redux/containers/Search";
import CarsList from "../redux/containers/CarsList";
export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CarsList/>
      </div>
    );
  }
}
