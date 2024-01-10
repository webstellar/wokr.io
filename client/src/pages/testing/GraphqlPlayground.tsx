import { ApolloSandbox } from "@apollo/sandbox/react";

const GraphqlPlayground = () => {
  return <ApolloSandbox initialEndpoint="http://localhost:8800/graphql" />;
};

export default GraphqlPlayground;
