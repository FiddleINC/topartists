/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <div className="card w3-card" key={index}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hovereffect">
              <img
                src={artist.images[0].url}
                alt="thumb"
                className="card-image img-responsive"
              />
              <div class="overlay">
                <h2>{artist.name}</h2>
                <div class="rotate">
                  <p class="group1">
                    <a href="#">
                      <i class="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i class="fa fa-facebook" />
                    </a>
                  </p>
                  <hr />
                  <hr />
                  <p class="group2">
                    <a href="#">
                      <i class="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i class="fa fa-dribbble" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    return artistList;
  };
  render() {
    return (
      <div className="Artist w3-animate-opacity w3-content">
        <div className="container">{this.createList()}</div>
        <br />
      </div>
    );
  }
}

export default Artists;
