import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext.tsx";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

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
  <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </BrowserRouter>
);
