import { profiles } from "../../temp.js";
import { authCheck } from "../../helpers/auth.js";
import { generateFromEmail } from "unique-username-generator";

//models
import { User } from "../../models/user.js";

const createUser = async (_, args, { req }) => {
  //console.log(args.input.username);
  console.log("AUTHTOKEN", req.headers.authtoken);
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });

  return user
    ? user
    : new User({
        email: currentUser.email,
        username: generateFromEmail(currentUser.email, 4),
      }).save();
};

const updateUser = async (_, args, { req }) => {
  const currentUser = await authCheck(req);
  let user = await User.findOneAndUpdate(
    { email: currentUser.email },
    { username: args?.input?.username },
    {
      new: true,
      runValidators: true,
    }
  );

  return user;
};

const totalUsers = () => profiles.length;
const allUsers = () => profiles;
const singleUser = (_, args) => {
  return profiles.find((profile) => profile.id === args.id);
};

//the main deal
const userResolvers = {
  Query: {
    singleUser,
    totalUsers,
    allUsers,
  },

  Mutation: {
    createUser,
    updateUser,
  },
};

export default userResolvers;
