import { Fragment, useContext } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoggedInHeader from "../header/LoggedInHeader";
import LoggedInFooter from "../footer/LoggedInFooter";

import { AuthContext } from "../../context/authContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <Fragment>
      {user ? <LoggedInHeader /> : <Header />}
      <main>{children}</main>
      {user ? <LoggedInFooter /> : <Footer />}
    </Fragment>
  );
};

export default Layout;
