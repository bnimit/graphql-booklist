const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const dbUrl = require("./constants/database");
const mongoose = require("mongoose");
const app = express();

//connect to mlab database
//replace it with your own string and credentials
mongoose.connect(dbUrl);
mongoose.connection.once("open", () => {
  console.log("connected to the mongoDB instance!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("The app is ready and listening on the port 4000");
});
