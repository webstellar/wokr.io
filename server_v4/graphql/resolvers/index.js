import automationResolvers from "./automations.js";

const resolvers = {
  Query: {
    ...automationResolvers.Query,
  },
  Mutation: {
    ...automationResolvers.Mutation,
  },
};

export default resolvers;
