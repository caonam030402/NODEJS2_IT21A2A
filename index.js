const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.URL_MONGOOSE);
    console.log("DB connected!!!");
  } catch (error) {
    console.log("DB not connect!!!");
  }
}

connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use(authorRoute);
app.use(bookRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
