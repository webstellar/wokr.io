import { profiles } from "../../temp.js";
import { authCheck } from "../../helpers/auth.js";

const totalProfiles = () => profiles.length;
const allProfiles = () => profiles;
const singleProfile = (_, args) => {
  return profiles.find((profile) => profile.id === args.id);
};
const newProfile = (_, args, { req, res }) => {
  authCheck(req, res);

  let profile = {
    ...args.profile,
    id: profiles.length + 1,
  };

  profiles.push(profile);
  return profile;
};

const me = (_, args, { req, res }) => {
  authCheck(req, res);
  return "Peter";
};

//the main deal
const profileResolvers = {
  Query: {
    singleProfile,
    totalProfiles,
    allProfiles,
    me,
  },

  Mutation: {
    newProfile,
  },
};

export default profileResolvers;
