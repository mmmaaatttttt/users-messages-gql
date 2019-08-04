const express = require("express")
const { ApolloServer} = require("apollo-server-express")
const cors = require("cors")
const resolvers = require("./resolvers")
const schema = require("./schemas")
const models = require("./models")

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

server.applyMiddleware({ app, path: '/graphql' });

app.listen(process.env.PORT || 8000, function(){
  console.log(`🚀 Server starting!`)
})