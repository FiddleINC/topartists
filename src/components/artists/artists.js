import React, { Component } from "react";

class Artists extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     artists: this.props.artists
  //   };
  // }

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
          {/* <div className="now-playing__img">
      <img src={props.item.album.images[0].url} alt="thumb" />
    </div> */}
          <div className="container">
            {this.createList()}
          </div>
          <br />
          {/* <div className="now-playing__artist">
        {props.item.artists[0].name}
      </div>
      <div className="now-playing__status">
        {props.is_playing ? "Playing" : "Paused"}
      </div>
      <div className="progress">
        <div className="progress__bar" style={progressBarStyles} />
      </div> */}
          {/* <div className="background" style={backgroundStyles} />{" "} */}
        </div>
    );
  }
}

export default Artists;
