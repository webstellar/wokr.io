export const typeDefs = `#graphql

  type images {
    id: ID!
    url: String!
  }
  type platform {
    id: ID!
    title: String!
    iconUrl: String!
  }
  type Automation {
    id: ID!
    title: String!
    description: String!
    video: String!
    platform: [platform!]!
    images: [images!]!
  }
  type Query {
    totalAutomations: Int!
    allAutomations: [Automation!]!
  }

  #mutations

  type Mutation {
    newAutomation(
      title: String!
      description: String!
      video: String!
    ): Automation!
  }
`;

//reviews
//seller
