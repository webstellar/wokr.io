//import { ApolloServer } from "@apollo/server";
//import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import connectDatabase from "./config/_db.js";
import { typeDefs } from "./graphql/schema.js";
import resolvers from "./graphql/resolvers/index.js";
import express from "express";
import { authCheck } from "./helpers/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//server setup
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: ({ req, res }) => ({
    req,
    res,
  }),
});
connectDatabase();

server.start().then(() => {
  server.applyMiddleware({ app });

  app.get("/rest", authCheck, function (req, res) {
    res.json({
      data: "You hit the rest endpoint!",
    });
  });

  app.listen(port, () => {
    console.log(
      `Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
});

/* 
const { url } = await startStandaloneServer(server, {
  listen: {
    port: port,
  },
});

app.get("/rest", authCheck, function (req, res) {
  res.json({
    data: "You hit rest endpoint too!",
  });
});

console.log(`Server ready at: ${url}`);
 */
