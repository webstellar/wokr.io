import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useAllAutomationsQuery } from "./hooks/useAllAutomationsQuery";
import { Automation } from "./types/Automation";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { List } from "antd";
import { AuthContext } from "./context/authContext";

const App: React.FC = () => {
  const automations = useAllAutomationsQuery();
  const automation = automations?.data?.allAutomations;

  const { state, dispatch } = useContext(AuthContext);

  const changeUsername = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "Peter Onyegbule",
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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

      {JSON.stringify(state.user)}

      <button onClick={changeUsername}>Create Something!</button>
    </>
  );
};

export default App;
