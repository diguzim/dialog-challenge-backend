import express from "express";
import morgan from "morgan";
import resolvers from "./resolvers";
import typeDefs from "./schemas";
import { ApolloServer } from "apollo-server-express";
import { getUsers } from "./models/user";

export interface Context {
  models: {
    user: { getUsers: typeof getUsers };
  };
}

const context: Context = {
  models: {
    user: { getUsers },
  },
};

const app = express();
app.use(morgan("dev"));

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
