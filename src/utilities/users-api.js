const BASE_URL = "/api/users";

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    // whether you're using axios or fetch, these will be very similar
    // you have to identify the method
    // if you're sending data up, you need a body property
    // so the recieving end knows where to find that data
    method: "POST",
    headers: { "Content-Type": "application/json" }, //when doing HTTP requests and communicating back and forth through the servers, headers are extra info about what is coming back to the user, which allows the recieving end to know what content type we have, cookies, tokens, meta data that pertains to the communication between servers
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData), // will take our user data and stringify it to send over the network
  });

  if (res.ok) {
    return res.json();
  } else {
    // this can be utitilized by the devs, the other catch error message
    // will be displayed to the user
    throw new Error("Invalid Sign Up");
  }
}

export async function login(userData) {
  const res = await fetch(`${BASE_URL}/login`, {
    // whether you're using axios or fetch, these will be very similar
    // you have to identify the method
    // if you're sending data up, you need a body property
    // so the recieving end knows where to find that data
    method: "POST",
    headers: { "Content-Type": "application/json" }, //when doing HTTP requests and communicating back and forth through the servers, headers are extra info about what is coming back to the user, which allows the recieving end to know what content type we have, cookies, tokens, meta data that pertains to the communication between servers
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData), // will take our user data and stringify it to send over the network
  });

  if (res.ok) {
    return res.json();
  } else {
    // this can be utitilized by the devs, the other catch error message
    // will be displayed to the user
    throw new Error("Invalid Sign Up");
  }
}
