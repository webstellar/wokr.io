import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import HomeHero from "../components/hero/HomeHero";
import Services from "../components/services/Services";
import Integrations from "../components/integration/Integrations";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <HomeHero />
        <Services />
        <Integrations />
      </Layout>
    </Fragment>
  );
};

export default Home;
