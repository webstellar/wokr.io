import { gql, useQuery } from "@apollo/client";

export const useAllAutomationsQuery = () => {
  const data = useQuery(
    gql`
      query GetAutomations {
        allAutomations {
          id
          title
          description
        }
      }
    `
  );

  return data;
};
