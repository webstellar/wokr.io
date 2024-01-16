import { Fragment } from "react";
import LoggedInLayout from "../../components/layout/LoggedInLayout";
import EditProfile from "../../components/profile/EditProfile";

const SetupProfile = () => {
  return (
    <Fragment>
      <LoggedInLayout>
        <EditProfile />
      </LoggedInLayout>
    </Fragment>
  );
};

export default SetupProfile;
