import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import EditProfile from "../components/profile/EditProfile";

const SetupProfile = () => {
  return (
    <Fragment>
      <Layout>
        <EditProfile />
      </Layout>
    </Fragment>
  );
};

export default SetupProfile;
