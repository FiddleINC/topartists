import React from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../../config.js";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="bgimg">
      <div className="middle">
        <h1>Welcome to your Top Artists</h1>
        <hr />
      </div>
      <a
        className="btn btn--loginApp-link"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    </div>
  );
};
export default Welcome;
