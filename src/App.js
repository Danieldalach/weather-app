import React, { Component } from "react";
import { CityCard } from "./Components/CityCard";
import AllCities from "./Components/AllCities";
import "./App.css";

class App extends Component {
  state = {
    comp: "favorite",
    cities: []
  };

  renderSearch() {
    return (
      <div className="col s3">
        <AllCities
          addToFavorites={this.addToFavorites.bind(this)}
          removeFromFavorites={this.removeFromFavorites.bind(this)}
          savedCities={this.state.cities}
        />
      </div>
    );
  }

  renderFavorites() {
    const { cities } = this.state;

    return (
      <div className="col s3">
        <h2>Saved Cities</h2>
        {cities.map(city => (
          <CityCard
            removeFromFavorites={this.removeFromFavorites.bind(this)}
            key={city.Key}
            city={city}
          />
        ))}
      </div>
    );
  }

  render() {
    const { comp } = this.state;

    return (
      <div className="container app">
        <div className="switch">
          <button
            className="btn"
            onClick={this.switchComp.bind(this, "search")}
          >
            Search
          </button>
          <button
            className="btn"
            onClick={this.switchComp.bind(this, "favorite")}
          >
            Favorites ({this.state.cities.length})
          </button>
        </div>
        <h1 className="logo">Weather App</h1>
        {comp === "search" && this.renderSearch()}
        {comp === "favorite" && this.renderFavorites()}
      </div>
    );
  }

  switchComp(userChoiceComp) {
    this.setState({ comp: userChoiceComp });
  }

  addToFavorites(city) {
    const cities = [...this.state.cities, city];
    this.setState({ cities });
  }

  removeFromFavorites(city) {
    const cities = this.state.cities.filter(c => c != city);
    this.setState({ cities });
  }
}

export default App;
