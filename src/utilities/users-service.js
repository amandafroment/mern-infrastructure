import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  //the name of the key is in ''
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(userData) {
  const token = await usersAPI.login(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired- remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token; // if Token isnt expired, we want to return the token
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}
