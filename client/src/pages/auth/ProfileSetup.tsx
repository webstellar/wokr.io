import { useEffec, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  firstname: "",
  lastname: "",
  profilePicture: "",
  profileDescription: "",
};

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initState);

  return <div>ProfileSetup</div>;
};

export default ProfileSetup;
