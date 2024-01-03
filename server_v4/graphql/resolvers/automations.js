import { automations } from "../../temp.js";

const totalAutomations = () => automations.length;

const allAutomations = () => automations;

const newAutomation = (_, args) => {
  let automation = {
    ...args.automation,
    id: automations.length + 1,
    //id: Math.floor(Math.random() * 10000).toString()
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
