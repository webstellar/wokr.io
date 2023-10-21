import React, { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
