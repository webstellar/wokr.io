import { Routes, Route } from "react-router-dom";
import { useAllAutomationsQuery } from "./hooks/useAllAutomationsQuery";
import { Automation } from "./types/Automation";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";

import { List } from "antd";
import CompleteRegistration from "./pages/auth/CompleteRegistration";

const App: React.FC = () => {
  const automations = useAllAutomationsQuery();
  const automation = automations?.data?.allAutomations;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/complete-registration"
          element={<CompleteRegistration />}
        />
      </Routes>
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
