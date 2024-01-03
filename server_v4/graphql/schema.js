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

  type Profile {
    id: ID!
    name: String!
    email: String!
    profilePicture: String!
  }

  type Query {
    totalAutomations: Int!
    totalProfiles: Int!
    allAutomations: [Automation]
    allProfiles: [Profile]
    singleAutomation(id: ID!): Automation
    singleProfile(id: ID!): Profile
    me: String!
  }

  #mutations
  type Mutation {
    newAutomation(
     automation: AddAutomationInput!
    ): Automation
    newProfile(
      profile: AddProfileInput!
    ): Profile
  }

  input AddAutomationInput {
    title: String!
    description: String!
    video: String!
    platforms: [AddAutomationPlatformInput!]
    images: [AddAutomationImageInput!]
  }

  input AddProfileInput {
    name: String!
    email: String!
    profilePicture: String!
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
