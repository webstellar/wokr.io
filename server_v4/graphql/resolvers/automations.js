import { automations } from "../../temp.js";
import { authCheck } from "../../helpers/auth.js";

const totalAutomations = () => automations.length;

const allAutomations = async (_, args, { req }) => {
  await authCheck(req);
  return automations;
};

const newAutomation = (_, args) => {
  let automation = {
    ...args.automation,
    id: automations.length + 1,
  };
  automations.push(automation);
  return automation;
};

const singleAutomation = (_, args) => {
  return automations.find((automation) => automation.id === args.id);
};

//the main deal
const automationResolvers = {
  Query: {
    totalAutomations,
    allAutomations,
    singleAutomation,
  },

  Mutation: {
    newAutomation,
  },
};

export default automationResolvers;
