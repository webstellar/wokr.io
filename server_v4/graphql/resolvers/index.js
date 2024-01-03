import automationResolvers from "./automations.js";
import profileResolvers from "./auth.js";

const resolvers = {
  Query: {
    ...automationResolvers.Query,
    ...profileResolvers.Query,
  },
  Mutation: {
    ...automationResolvers.Mutation,
    ...profileResolvers.Mutation,
  },
};

export default resolvers;
