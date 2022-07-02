// 1. Initialize npm and install dependencies
// express, dotenv, cors, mongodb, ejs, nodemon (--save-dev)
// dotenv lets us create some environment variables and obscure them out of our main code eg DB password
// npm install cors lets us bypass cross origin request blocks that can come up in our browser. It sets the cross origin request policy.
// npm install ejs helps us do templating - basically to dynamically generate HTML on the fly based on the data that we are passing from a server. We use because it is close in syntax to JS.
// npm install nodemon --save-dev stops you from manually having to restart the server. We do not want nodemon in production so we say --save-dev

const express = require("express");
const app = express();
const cors = require(cors);
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();


// process.env.DB_STRING pulls our secret connection string we got from mongodb to assign it as a variable
let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = '',
    collection

MongoClient.connect(dbConnectionString)
.then(client => {
    console.log(`Connected to Database`)
    db = client.db(dbName)
    collection = db.collection('movies')
})