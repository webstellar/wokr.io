import { profiles } from "../../temp.js";
import { authCheck } from "../../helpers/auth.js";
import shortid from "shortid";

//models
import { User } from "../../models/user.js";

const createUser = async (_, args, { req }) => {
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });

  return user
    ? user
    : new User({
        email: currentUser.email,
        username: shortid.generate(), //temporary
      }).save();
};

const me = async (_, args, { req }) => {
  await authCheck(req);
  return "Peter";
};

const totalUsers = () => profiles.length;
const allUsers = () => profiles;
const singleUser = (_, args) => {
  return profiles.find((profile) => profile.id === args.id);
};

//the main deal
const userResolvers = {
  Query: {
    createUser,
    singleUser,
    totalUsers,
    allUsers,
    me,
  },

  Mutation: {
    createUser,
  },
};

export default userResolvers;
