import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import HomeHero from "../components/hero/HomeHero";
import Services from "../components/services/Services";
import Integrations from "../components/integration/Integrations";
import Process from "../components/process/Process";
import Statement from "../components/statement/Statement";
import GetStarted from "../components/getstarted/GetStarted";

import { List } from "antd";

import { useAllAutomationsQuery } from "../hooks/useAllAutomationsQuery";
import { Automation } from "../types/Automation";

const Home = () => {
  const automations = useAllAutomationsQuery();
  const automation = automations?.data?.allAutomations;

  return (
    <Fragment>
      <Layout>
        <HomeHero />
        <Services />
        <Integrations />
        <Process />
        <div className="bg-wokr-red-50">
          <Statement />
          <GetStarted />
        </div>

        <List
          className="-z-10"
          itemLayout="horizontal"
          dataSource={automation}
          renderItem={(item: Automation) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        ></List>
      </Layout>
    </Fragment>
  );
};

export default Home;
