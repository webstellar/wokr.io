import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import HomeHero from "../components/hero/HomeHero";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <HomeHero />
        <Services />
      </Layout>
    </Fragment>
  );
};

export default Home;
