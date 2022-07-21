import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // allowed introspection for the demo
});

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
