import LoggedInLayout from "../../components/layout/LoggedInLayout";
import AddJob from "../../components/job/AddJob";

const PostJob = () => {
  return (
    <div>
      <LoggedInLayout>
        <AddJob />
      </LoggedInLayout>
    </div>
  );
};

export default PostJob;
