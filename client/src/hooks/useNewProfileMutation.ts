import { gql } from "@apollo/client";

export const useNewProfileMutation = gql`
  mutation CreateUser {
    createUser {
      id
      email
      username
    }
  }
`;
