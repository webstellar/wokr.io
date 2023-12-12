import { Fragment } from "react";
import LoggedInHeader from "../header/LoggedInHeader";
import LoggedInFooter from "../footer/LoggedInFooter";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <LoggedInHeader />
      <main>{children}</main>
      <LoggedInFooter />
    </Fragment>
  );
};

export default LoggedInLayout;
