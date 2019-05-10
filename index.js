require("dotenv").config();
const express = require("express");
const app = express();
const apiKey = process.env.API_KEY;

app.set("port", process.env.PORT || 3000);

app.get("/", function (request, response) {

  response.status(200).json({apiKey});
})

app.listen(app.get("port"), () => apiKey);
