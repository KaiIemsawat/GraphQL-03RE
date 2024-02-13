const express = require("express");
const cors = require("cors");
const colors = require("colors");

require("dotenv").config();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 3300;

const app = express();
connectDB();

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
    })
);

app.listen(port, console.log(`SERVER HAS LAUNCHED ON PORT -- ${port}`));
