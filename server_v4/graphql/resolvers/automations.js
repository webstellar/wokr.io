import automations from "../../temp.js";

const totalAutomations = () => automations.length; //anonymous func

const allAutomations = () => automations;

const newAutomation = (parent, args) => {
  //create a new post object

  const automation = {
    id: automations.length + 1,
    title: args.title,
    description: args.description,
    video: args.video,
  };

  //push new automation to automation arrat

  automations.push(automation);
  return automation;
};

const automationResolvers = {
  Query: {
    totalAutomations,
    allAutomations,
  },

  Mutation: {
    newAutomation,
  },
};

export default automationResolvers;
