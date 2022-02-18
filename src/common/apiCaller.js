import fetch from "isomorphic-fetch";

const { Promise } = require("es6-promise");

const API_URL = "https://www.boredapi.com/api/";
export default (endpoint, method = "get", body) =>
  fetch(`${API_URL}${endpoint}`, {
    headers: { "content-type": "application/json" },
    method,
    body: JSON.stringify(body),
  })
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      (response) => response,
      (error) => console.log("error123", error)
    );
