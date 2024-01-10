export const typeDefs = `#graphql
  type AutomationImages {
    id: ID!
    url: String!
  }
  type AutomationTool {
    id: ID!
    title: String!
    image: String!
  }
  type Automation {
    id: ID!
    title: String!
    description: String!
    featuredImage: String!
    video: String!
    tools: [AutomationTool!]!
    images: [AutomationImages!]!
  }
  type User {
    id: ID!
    username: String!
    name: String!
    email: String!
    profilePicture: String!
  }


  #inputs
  input AddAutomationInput {
    title: String!
    description: String!
    video: String!
    tools: [AddAutomationToolInput!]
    images: [AddAutomationImageInput!]
  }  
  input AddUserInput {
    username: String!
    name: String!
    email: String!
    profilePicture: String!
  }
  input AddAutomationToolInput {
    id: ID!
    title: String!
    image: String!
  }
  input AddAutomationImageInput {
    id: ID!
    url: String!
  }


  #queries
  type Query {
    totalAutomations: Int!
    singleAutomation(id: ID!): Automation
    allAutomations: [Automation]
    totalUsers: Int!
    allUsers: [User]
    createUser: User 
    singleUser(id: ID!): User
    me: String!
  }


  #mutations
  type Mutation {
    newAutomation: Automation
    createUser: User
  }
`;

//reviews
//user
//category
//service
//message
//transaction
