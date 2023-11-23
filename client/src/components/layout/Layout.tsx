import React, { Fragment, useContext, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { AuthContext } from "../../context/authContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
