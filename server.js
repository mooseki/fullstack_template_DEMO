// 1. Initialize npm and install dependencies
// express, dotenv, cors, mongodb, ejs, nodemon (--save-dev)
// dotenv lets us create some environment variables and obscure them out of our main code eg DB password
// npm install cors lets us bypass cross origin request blocks that can come up in our browser. It sets the cross origin request policy.
// npm install ejs helps us do templating - basically to dynamically generate HTML on the fly based on the data that we are passing from a server. We use EJS because it is close in syntax to JS.
// npm install nodemon --save-dev stops you from manually having to restart the server. We do not want nodemon in production so we say --save-dev
// middleware is used  to run before your routes (i.e any GETS or PUTS) — for example we have an instance on lines 28-31 we're setting up a folder to hold our css to let use external files from the public folder

const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const PORT = 8000;

// process.env.DB_STRING pulls our secret connection string we got from mongodb to assign it as a variable
let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = "sample_mflix",
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log(`Connected to Database`);
  db = client.db(dbName);
  collection = db.collection("movies");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (request, response) => {
  try {
    response.render("index.ejs");
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// PORT - 8000
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port`);
});
