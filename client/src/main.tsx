import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

/* client
  .query({
    query: gql`
      query GetAutomations {
        allAutomations {
          id 
          title
          description
        }
      }
    `,
  })
  .then((result) => console.log(result)); */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
