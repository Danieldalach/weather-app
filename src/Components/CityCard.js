import React from "react";
import { fetchCityWeather } from "../utils/weather";

export class CityCard extends React.Component {
  state = { data: null };

  async componentDidMount() {
    const data = await fetchCityWeather(this.props.city.Key, "5day");
    this.setState({ data });
  }

  render() {
    const { city } = this.props;
    const { data } = this.state;

    return (
      <article className="city-card col-sm-3">
        <button className="remove" onClick={this.removeFavorite.bind(this)}>
          X
        </button>

        <h3>{city.LocalizedName}</h3>
        {!data && "loading..."}

        {data && (
          <h4>
            {" "}
            Today is{" "}
            {data.DailyForecasts[0].Day.IconPhrase +
              " " +
              data.DailyForecasts[0].Temperature.Maximum.Value}
            &#8451;
          </h4>
        )}

        <h5>Here the fortcast for the next days:</h5>
        {data && (
          <div className="box">
            {" "}
            {data.DailyForecasts[1].Date.toString().slice(0, 10) +
              " " +
              data.DailyForecasts[1].Day.IconPhrase +
              ".  " +
              data.DailyForecasts[1].Temperature.Maximum.Value}
            &#8451;
          </div>
        )}
        {data && (
          <div className="box">
            {" "}
            {data.DailyForecasts[2].Date.toString().slice(0, 10) +
              " " +
              data.DailyForecasts[2].Day.IconPhrase +
              ".  " +
              data.DailyForecasts[2].Temperature.Maximum.Value}
            &#8451;
          </div>
        )}
        {data && (
          <div className="box">
            {" "}
            {data.DailyForecasts[3].Date.toString().slice(0, 10) +
              " " +
              data.DailyForecasts[3].Day.IconPhrase +
              ".  " +
              data.DailyForecasts[3].Temperature.Maximum.Value}
            &#8451;
          </div>
        )}
        {data && (
          <div className="box">
            {" "}
            {data.DailyForecasts[4].Date.toString().slice(0, 10) +
              " " +
              data.DailyForecasts[4].Day.IconPhrase +
              ".  " +
              data.DailyForecasts[4].Temperature.Maximum.Value}
            &#8451;
          </div>
        )}

        {data && <p className="text">{data.Headline.Text}</p>}
      </article>
    );
  }

  async removeFavorite() {
    this.props.removeFromFavorites(this.props.city);
  }
}

export default CityCard;
