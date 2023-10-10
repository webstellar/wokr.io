const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const http = require("http");

const connectDatabase = require("./config/db");

const path = require("path");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const PORT = process.env.PORT;
const app = express();

//typeDefs merge all typeDefs into one
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./graphql/typeDefs"))
);

//resolvers
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./graphql/resolvers"))
);

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

const httpserver = http.createServer(app);

connectDatabase();

app.listen(
  PORT,
  console.log(`Server is running at port ${PORT}`),
  console.log(`graphql server is running at ${PORT}${apolloServer.graphqlPath}`)
);

//Problem with Schema

/* const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const connectDatabase = require("./config/db");

const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

connectDatabase();

server.listen({ port: PORT }).then((res) => {
  console.log(`server is running at ${res.url}`);
});
 */
