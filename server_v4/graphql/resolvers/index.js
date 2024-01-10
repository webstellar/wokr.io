import automationResolvers from "./automations.js";
import userResolvers from "./auth.js";

const resolvers = {
  Query: {
    ...automationResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...automationResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};

export default resolvers;
