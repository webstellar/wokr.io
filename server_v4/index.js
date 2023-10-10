import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import connectDatabase from "./config/_db.js";
import { typeDefs } from "./graphql/schema.js";
import resolvers from "./graphql/resolvers/index.js";

dotenv.config();

const port = process.env.PORT || 5000;

//server setup
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
connectDatabase();

const { url } = await startStandaloneServer(server, {
  listen: {
    port: port,
  },
});

console.log("serevr ready at port", port);
