export const typeDefs = `#graphql

  type AutomationImages {
    id: ID!
    url: String!
  }

  type AutomationPlatform {
    id: ID!
    title: String!
    iconUrl: String!
  }

  type Automation {
    id: ID!
    title: String!
    description: String!
    video: String!
    platforms: [AutomationPlatform!]!
    images: [AutomationImages!]!
  }

  type Query {
    totalAutomations: Int!
    allAutomations: [Automation]
    singleAutomation(id: ID!): Automation
  }

  #mutations
  type Mutation {
    newAutomation(
     automation: AddAutomationInput!
    ): Automation
  }

  input AddAutomationInput {
    title: String!
    description: String!
    video: String!
    platforms: [AddAutomationPlatformInput!]
    images: [AddAutomationImageInput!]
  }

input AddAutomationPlatformInput {
    id: ID!
    title: String!
    iconUrl: String!
  }

  input AddAutomationImageInput {
    id: ID!
    url: String!
  }
`;

//reviews
//user
//category
//service
//message
//transaction
