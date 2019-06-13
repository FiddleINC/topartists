export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "3ffc762137bb4446a79df7e9cde4a1e6";
export const redirectUri = "https://topartists.herokuapp.com/artists";
// export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state"
];
