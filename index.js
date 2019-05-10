require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const apiKey = process.env.API_KEY;

const baseUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`

function getMaps() {
  return fetch(baseUrl).then(resp => resp.json())
}

app.get("/", async function (request, response) {
  const maps = await getMaps()
  response.send(maps);
})

app.listen(process.env.PORT || 3000);
