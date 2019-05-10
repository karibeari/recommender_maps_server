require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (request, response) {
  const apiKey = process.env.API_KEY;
  response.send(apiKey);
})

app.listen(process.env.PORT || 3000);
