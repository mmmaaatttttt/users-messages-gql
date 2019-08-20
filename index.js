const express = require("express")
const { ApolloServer} = require("apollo-server-express")
const cors = require("cors")
const resolvers = require("./resolvers")
const schema = require("./schemas")
const models = require("./models")

const http = require("http");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());


const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  context: () => ({
    models
  })
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);


httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${
      server.subscriptionsPath
    }`
  );
});