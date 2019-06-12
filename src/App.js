import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import "./App.css";
import axios from "axios";

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
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
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
    }
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
          progress_ms: response.data.progress_ms,
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.progress_ms}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
