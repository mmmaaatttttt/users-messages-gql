const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    username: ID!
    first_name: String!
    last_name: String!
    messages: [Message!]
  }
  
  extend type Query {
    users: [User!]
    user(username: ID!): User
  }

  extend type Mutation {
    createUser(username: ID!, first_name: String!, last_name: String!): User!
  }
`;
