# GraphQL Server with Apollo Demo

Here is a short demo for a lightning talk on getting up and running with GraphQL. Most of the DB logic is from a former Rithm School exercise with users and messages

You can try it out at [https://users-messages-gql.herokuapp.com/graphql](https://users-messages-gql.herokuapp.com/graphql)
b
## Running your own local version

1. fork/clone
2. `npm install`
1. `createdb users-messages-gql`
1. `psql users-messages-gql < data.sql`
3. `nodemon`
4. head over to [http://localhost:8000/graphql](http://localhost:8000/graphql)