import { automations } from "../../temp.js";
import { authCheck } from "../../helpers/auth.js";

//models
import { Automation } from "../../models/automation.js";

const totalAutomations = () => automations.length;

const allAutomations = async (_, args, { req }) => {
  await authCheck(req);
  return automations;
};

const createAutomation = async (_, args, { req }) => {
  let automationResult = args?.input.automations;
  const currentUser = await authCheck(req);

  const automation = await Automation.findOne({});

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
    createAutomation,
  },
};

export default automationResolvers;
