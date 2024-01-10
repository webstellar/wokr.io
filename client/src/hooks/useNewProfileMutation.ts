import { gql } from "@apollo/client";

export const useNewProfileMutation = gql`
  mutation CreateUser($input: AddUserInput!) {
    createUser(input: $input) {
      id
      email
      username
    }
  }
`;
