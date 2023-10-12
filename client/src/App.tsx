import React from "react";
import { useAllAutomationsQuery } from "./hooks/useAllAutomationsQuery";
import { Automation } from "./types/Automation";

import { List } from "antd";

const App: React.FC = () => {
  const automations = useAllAutomationsQuery();
  const automation = automations?.data?.allAutomations;

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={automation}
        renderItem={(item: Automation) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      ></List>
    </>
  );
};

export default App;
