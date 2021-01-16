const express = require("express");

const app = express();

app.use(express.json());
app.get("/", async (request, response) => {
  return response.send({ message: "Hello World" });
});

module.exports = app;
