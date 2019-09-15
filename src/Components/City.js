import React, { Component } from "react";
import { fetchCityWeather } from "../utils/weather";
import Switch from "react-switch";

class City extends Component {
  state = {
    weatherr: [],
    fortcast: [],
    data: null,
    checked: false
  };

  async componentDidMount() {
    const data = await fetchCityWeather(this.props.room.Key, "1day");
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <article className="search-card col-sm-3">
        city name: <h3> {this.props.room.LocalizedName} </h3>
        {/* city key: {this.props.room.Key} <br/><br/> */}
        current weather:
        {!data && "loading..."}
        {data && (
          <h4>{data.DailyForecasts[0].Temperature.Maximum.Value}&#8451;</h4>
        )}
        {data && <h4> {data.DailyForecasts[0].Day.IconPhrase}</h4>}
        {data && <p>{data.Headline.Text}</p>}
        {/* <button onClick={this.addFavorite.bind(this)}>add to favorite</button>  */}
        <Switch
          className="react-switch"
          onChange={this.handleChange.bind(this)}
          checked={this.state.checked}
        />
        <p>
          {" "}
          {this.state.checked ? (
            <h6>Added to your favorite</h6>
          ) : (
            "Toggle to save to favorite "
          )}{" "}
        </p>
      </article>
    );
  }

  async addFavorite() {
    let city = this.props.room;
    this.props.addToFavorites(city);
  }

  async removeFavorite() {
    this.props.removeFromFavorites(this.props.room);
  }

  handleChange(checked) {
    if (checked === true) {
      this.addFavorite();
    } else {
      this.removeFavorite();
    }
    this.setState({ checked });
  }
}

export default City;
