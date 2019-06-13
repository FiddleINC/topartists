import React, { Component } from "react";
import "./artists.css";

class Artists extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     artists: this.props.artists
  //   };
  // }

  componentDidMount() {
    alert("Click on the Image to open Spotify Profile");
  }

  createList = props => {
    console.log(this.props);

    let artistList = [];
    this.props.artists.forEach((artist, index) => {
      artistList.push(
        <div className="card" key={index}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="card-title">{artist.name}</h1>
            <img
              src={artist.images[0].url}
              alt="thumb"
              className="card-image"
            />
          </a>
        </div>
      );
    });

    return artistList;
  };
  render() {
    return (
      <div className="App">
        <div className="container">{this.createList()}</div>
        <br />
      </div>
    );
  }
}

export default Artists;
