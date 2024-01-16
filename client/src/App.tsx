import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AuthContext } from "./context/authContext";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/sellerDashboard/SetupProfile";
import PostJob from "./pages/sellerDashboard/PostJob";
import CompleteRegistration from "./pages/auth/CompleteRegistration";

const App: React.FC = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    version: "1.2",
    headers: {
      authtoken: user ? user.token : "",
    },
  });

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/complete-registration"
          element={<CompleteRegistration />}
        />
        <Route path="/setup-profile" element={<Profile />} />
        <Route path="/post-a-job" element={<PostJob />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
