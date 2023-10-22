import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import HomeHero from "../components/hero/HomeHero";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <HomeHero />
      </Layout>
    </Fragment>
  );
};

export default Home;
