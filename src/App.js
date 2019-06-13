import React, { Component } from "react";
import hash from "./hash";
// import Player from "./Player";
import Artists from "./components/artists/artists";
import "./App.css";
import axios from "axios";
import Welcome from "./components/welcome/welcome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      artists: []
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.getTopArtists = this.getTopArtists.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
      this.getTopArtists(_token);
    }
  }

  getTopArtists(token) {
    //Making a call
    const AuthStr = "Bearer " + token;
    axios
      .get(
        "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50",
        {
          headers: { Authorization: AuthStr }
        }
      )
      .then(response => {
        // If request is good...
        console.log(response.data);
        const arrayList = [];
        response.data.items.forEach(item => {
          arrayList.push(item);
        });
        console.log(arrayList);
        this.setState({
          artists: arrayList
        });
        console.log(this.state.artists);
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    const AuthStr = "Bearer " + token;
    axios
      .get("https://api.spotify.com/v1/me/player", {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        // If request is good...
        console.log(response.data);
        this.setState({
          item: response.data.item,
          is_playing: response.data.is_playing,
          progress_ms: response.data.progress_ms
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <div className="App">
        {!this.state.token && <Welcome />}
        {this.state.token && <Artists artists={this.state.artists} />}
      </div>
    );
  }
}

export default App;
