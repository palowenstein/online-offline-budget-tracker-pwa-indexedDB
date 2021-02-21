const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 4000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Added MONGODB_URI for Heroku Deployment + <useUnifiedTopology: true> for new Server Discover and Monitoring engine.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

// Added ENV port for Heroku deployment

app.listen(process.env.PORT || 6502, () => {
  console.log(`App running on port ${PORT}!`);
});