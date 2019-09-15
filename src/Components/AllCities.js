import React, { Component } from "react";
import City from "./City";
import { search } from "../utils/weather";

class AllCities extends Component {
  state = {
    rooms: [],
    cityname: ""
  };

 

  render() {
    return (
      <div className="col-sm-12">
        Search city{" "}
        <input
          onChange={this.handle.bind(this)}
          placeholder="tel aviv"
          name="cityname"
          
        />
        <br />
        {this.state.rooms.map(r => (
          <City
            addToFavorites={this.props.addToFavorites.bind(this)}
            removeFromFavorites={this.props.removeFromFavorites.bind(this)}
            key={r.roomid}
            room={r}
          />
        ))}
      </div>
    );
  }

  handle(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
    this.sendw();
  }

  async sendw() {
    if (this.state.cityname) {
      const rooms = await search(this.state.cityname);
      this.setState({ rooms: rooms });
    }
  }
}

export default AllCities;
