const { PubSub, withFilter } = require("graphql-subscriptions") 

const pubsub = new PubSub();


module.exports = {
  Query: {
    messages: async (parent, args, { models }) => {
      return await models.Message.all();
    },
    message: async (parent, { id }, { models }) => {
      return await models.Message.get(id);
    }
  },

  Mutation: {
    createMessage: async (parent, { username, body }, { models }) => {
      
      const createdMessage = await models.Message.create({
        body,
        username
      });
      
      // doing the publish here so that we have a newly created ID
      pubsub.publish("messageAdded", {
        messageAdded: {
          username,
          body,
          id: createdMessage.id
        }
      });
      
      return createdMessage
    },

    deleteMessage: async (parent, { id }, { models }) => {
      return await models.Message.delete(id);
    }
  },

  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator(["messageAdded"]),
    }
  },

  Message: {
    user: async (message, args, { models }) => {
      return await models.User.get(message.username);
    }
  }
};
