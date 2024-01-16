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
    username: String
    email: String
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
  input UpdateUserInput {
    username: String
  }


  #queries
  type Query {
    totalAutomations: Int!
    singleAutomation(id: ID!): Automation
    allAutomations: [Automation]
    totalUsers: Int!
    allUsers: [User]
    singleUser(id: ID!): User
  }


  #mutations
  type Mutation {
    createAutomation(input: AddAutomationInput!): Automation
    createUser: User
    updateUser(input: UpdateUserInput): User
  }
`;

//reviews
//user
//category
//service
//message
//transaction
