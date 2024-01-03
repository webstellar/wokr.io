import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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
  .then((result) => console.log(result)); 
  */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleReCaptchaProvider
    reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
  >
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <App />
          <ToastContainer />
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  </GoogleReCaptchaProvider>
);
