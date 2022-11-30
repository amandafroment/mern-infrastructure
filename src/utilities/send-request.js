import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    // setting the options if there is a payload
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // if options.headers = an object ex. application/json (truthy)
    // the or operator will return what is truthy and it will continue to the rest of the function(the bearer token)
    // if options.header = null or undefined, it is a falsey value, and it will return an empty object
    // the equal sign, if options.header is false, it will equal to an empty object
    // if it is true, then none of this will run
    options.headers ||= {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
