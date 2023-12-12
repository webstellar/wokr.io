import { Fragment, useContext } from "react";
import Layout from "../components/layout/Layout";
import HomeHero from "../components/hero/HomeHero";
import Services from "../components/services/Services";
import Integrations from "../components/integration/Integrations";
import Process from "../components/process/Process";
import Statement from "../components/statement/Statement";
import GetStarted from "../components/getstarted/GetStarted";

import { AuthContext } from "../context/authContext";

const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <Fragment>
      <Layout>
        {JSON.stringify(state.user)}
        <HomeHero />
        <Services />
        <Integrations />
        <Process />
        <div className="bg-wokr-red-50">
          <Statement />
          <GetStarted />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
