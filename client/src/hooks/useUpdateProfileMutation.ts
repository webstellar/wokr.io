import { gql } from "@apollo/client";

export const useUpdateProfileMutation = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      username
    }
  }
`;
