
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
      return await models.Message.create({
        body,
        username
      });
    },

    deleteMessage: async (parent, { id }, { models }) => {
      return await models.Message.delete(id);
    }
  },

  Message: {
    user: async (message, args, { models }) => {
      return await models.User.get(message.username);
    }
  }
};
